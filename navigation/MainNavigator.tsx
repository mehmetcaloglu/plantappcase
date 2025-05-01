import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Navigators
import HomeNavigator from './HomeNavigator';
import OnboardingNavigator from './OnboardingNavigator';

// Stack navigator için parametre listesi
export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  // Redux'tan onboarding durumunu al
  const isOnboardingCompleted = useSelector(
    (state: RootState) => state.onboarding.isOnboardingCompleted
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isOnboardingCompleted ? (
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      ) : (
        <Stack.Screen name="Home" component={HomeNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator; 