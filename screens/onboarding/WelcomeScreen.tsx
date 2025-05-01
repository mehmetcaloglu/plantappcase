import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import
  {
    Dimensions,
    Image,
    ImageBackground,
    Linking,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';
import { colors, typography } from '../../styles/theme';

type WelcomeScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Welcome'>;

// Ekran boyutlarını al
const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleTermsPress = () => {
    Linking.openURL('https://plantapp.app/terms');
  };

  const handlePrivacyPress = () => {
    Linking.openURL('https://plantapp.app/privacy');
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/onboarding/Background.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          {/* Header Text */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Welcome to <Text style={styles.highlight}>PlantApp</Text></Text>
            <Text style={styles.subtitle}>
              Identify more than 3000+ plants and 88% accuracy.
            </Text>
          </View>

          {/* Plant Image with Dots */}
          <View style={styles.imageContainer}>
            <Image 
              source={require('../../assets/images/onboarding/plant-main.png')} 
              style={styles.plantImage}
              resizeMode="contain"
            />
            
            {/* Info 3 - en altta */}
            <Image 
              source={require('../../assets/images/onboarding/info-3.png')} 
              style={[styles.infoIcon, styles.info3Position]}
              resizeMode="contain"
            />
            
            {/* Info 2 */}
            <Image 
              source={require('../../assets/images/onboarding/info-2.png')} 
              style={[styles.infoIcon, styles.info2Position]}
              resizeMode="contain"
            />
            
            {/* Camera Line */}
            <Image 
              source={require('../../assets/images/onboarding/Camera Line.png')} 
              style={styles.cameraIcon}
              resizeMode="contain"
            />
            
            {/* Info 1 - en üstte */}
            <Image 
              source={require('../../assets/images/onboarding/info-1.png')} 
              style={[styles.infoIcon, styles.info1Position]}
              resizeMode="contain"
            />
          </View>

          {/* Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('PlantIdentification')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          {/* Terms Text */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By tapping next, you are agreeing to PlantID{'\n'}
              <Text style={styles.termsLink} onPress={handleTermsPress}>Terms of Use</Text> & <Text style={styles.termsLink} onPress={handlePrivacyPress}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: height * 0.05,
    paddingBottom: 20,
  },
  headerContainer: {
    width: '100%',
    height: height * 0.1,
    alignItems: 'flex-start',
    paddingTop: height * 0.04,
  },
  title: {
    fontSize: 28,
    fontFamily: typography.fontFamily.regular,
    color: colors.textDark,
    marginBottom: 8,
    textAlign: 'left',
  },
  highlight: {
    fontFamily: typography.fontFamily.boldItalic,
    fontSize: 30,
    // fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.fontFamily.regular,
    color: colors.textDark,
    textAlign: 'left',
    opacity: 0.7,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * 0.625,
    marginVertical: 20,
    position: 'relative',
    // backgroundColor: 'red',
  },
  plantImage: {
    width: '100%',
    height: '95%',
    bottom: -10,
    // z index 2. en büyük
    zIndex: 19
  },
  cameraIcon: {
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.9,
    top: '4%',
    left: '50%',
    transform: [{ translateX: -width*0.9 / 2 }],
    zIndex: 20,
  },
  infoIcon: {
    position: 'absolute',
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  info1Position: {
    top: '3%',
    left: '2%',
    width: 100,
    height: 100,
    zIndex: 30,
  },
  info2Position: {
    bottom: '22%',
    right: '22%',
    zIndex: 5,
  },
  info3Position: {
    top: '7%',
    right: '10%',
    width: 65,
    height: 65,
    zIndex:10,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: typography.fontFamily.bold,
    fontSize: 15,
  },
  termsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  termsText: {
    fontSize: 11,
    fontFamily: typography.fontFamily.regular,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: colors.textDark,
    fontFamily: typography.fontFamily.regular,
  },
});

export default WelcomeScreen; 