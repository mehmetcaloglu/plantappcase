import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';
import { colors, typography } from '../../styles/theme';
type NavigationProp = StackNavigationProp<OnboardingStackParamList, 'PlantGuides'>;

const { width, height } = Dimensions.get( 'window' );

const PlantGuidesScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ImageBackground 
      source={require('../../assets/images/onboarding/Background.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          {/* Header Text */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Get plant care guides</Text>
            <Text style={styles.subtitle}>Find out how to care for plants, watering and lighting needs.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image 
              source={require('../../assets/images/onboarding/Guide-Image.png')} 
              style={styles.phoneImage}
              resizeMode="contain"
            />
            <Image 
              source={require('../../assets/images/onboarding/Sticks.png')} 
              style={styles.sticksImage}
              resizeMode="contain"
            />

            {/* Guide-Background.png */}
            <Image 
              source={require('../../assets/images/onboarding/Guide-Background.png')} 
              style={styles.guideBackground}
              resizeMode="contain"
              blurRadius={16}
            />

            
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Paywall')}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <View style={styles.sliderContainer}>
            <Image 
              source={require('../../assets/images/onboarding/slider-3.3.png')}
              style={styles.sliderImage}
              resizeMode="contain"
            />
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
    height: height * 0.11,
    alignItems: 'flex-start',
    paddingTop: height * 0.04,
  },
  title: {
    fontSize: 28,
    fontFamily: typography.fontFamily.bold,
    color: colors.textDark,
    marginBottom: 8,
    textAlign: 'left',
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
  phoneImage: {
    width: '100%',
    height: '95%',
    bottom: -80,
    zIndex: 10,
  },
  sticksImage: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    top:-10,
    right: -15,
    zIndex: 20,
  },
  guideBackground: {
    width: '120%',
    height: '120%',
    position: 'absolute',
    top: -70,
    // zIndex: -10,
    // Rotation
    // -73.6°
    // blur 10
    // blur: 10,
    transform: [{ rotate: '73.6deg' }],
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    bottom: -10,
    zIndex: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: typography.fontFamily.bold,
    fontSize: 15,
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  sliderImage: {
    margin: 10,
    height: 6,
  },
});

export default PlantGuidesScreen; 