import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import
  {
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';
import { colors, typography } from '../../styles/theme';


type NavigationProp = StackNavigationProp<OnboardingStackParamList, 'PlantIdentification'>;

const { width, height } = Dimensions.get( 'window' );

const PlantIdentificationScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground 
      source={require('../../assets/images/onboarding/Background.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          {/* Header Text */}
          <View style={ styles.headerContainer }>
            <Text style={ styles.title }>Take a photo to <Text style={ styles.boldTitle }>identify</Text>
              <View >
                <Image 
                  source={require('../../assets/images/onboarding/Brush.png')}
                  style={styles.brushIcon}
                  resizeMode="contain"
                />
              </View>
            </Text>
            <Text style={ styles.title }>the plant!</Text>
          </View>

          <View style={styles.imageContainer}>
              <Image 
                source={require('../../assets/images/onboarding/Identificaiton-Image.png')} 
                style={styles.phoneImage}
                resizeMode="contain"
              />
          </View>

          <PrimaryButton 
            title="Continue"
            onPress={() => navigation.navigate('PlantGuides')}
          />

          <View style={styles.sliderContainer}>
              <Image 
                source={require('../../assets/images/onboarding/slider-2.3.png')}
                style={styles.sliderImage}
                resizeMode="contain"
              />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create( {
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
    height: height * 0.11,
    alignItems: 'flex-start',
    paddingTop: height * 0.04,
  },
  boldTitle: {
    fontFamily: 'Rubik-Italic',
    fontWeight: '800',
  },
  title: {
    fontSize: 32,
    fontFamily: typography.fontFamily.boldItalic,
    color: colors.textDark,
    marginBottom: 8,
    textAlign: 'left',
    fontWeight: 'bold',
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
  },
  phoneImage: {
    width: '100%',
    height: '95%',
    bottom: -10,
    zIndex: 19,
    
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

  brushIcon: {
    position: 'absolute',
    width: 120,
    height:15,
    bottom: -20,
    right: -10,
  },

  sliderContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  sliderImage: {
    width: '100%',
    margin: 10,
    height: 6,
  },




});

export default PlantIdentificationScreen; 