import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// Screens
import PaywallScreen from '../screens/onboarding/PaywallScreen';
import PlantGuidesScreen from '../screens/onboarding/PlantGuidesScreen';
import PlantIdentificationScreen from '../screens/onboarding/PlantIdentificationScreen';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';

export type OnboardingStackParamList = {
  Welcome: undefined;
  PlantIdentification: undefined;
  PlantGuides: undefined;
  Paywall: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#ffffff' },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="PlantIdentification" component={PlantIdentificationScreen} />
      <Stack.Screen name="PlantGuides" component={PlantGuidesScreen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator; 