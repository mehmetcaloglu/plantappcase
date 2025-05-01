import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

// Screens

export type HomeStackParamList = {
  Main: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator; 