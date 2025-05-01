import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// Screens
import HomeScreen from '../screens/home/HomeScreen';

export type BottomTabParamList = {
  Home: undefined;
  Diagnose: undefined;
  Camera: undefined;
  Garden: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#BDBDBD',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/home-icon.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#28AF6E' : '#BDBDBD' }
              ]}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Diagnose"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Diagnose',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/diagnose-icon.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#28AF6E' : '#BDBDBD', width: 19, height: 22 }
              ]}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Camera"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View style={styles.scanButtonContainer}>
              <View style={styles.scanButton}>
                <Image
                  source={require('../assets/images/Scan.png')}
                  style={styles.scanIcon}
                />
              </View>
            </View>
          ),
        }}
      />
      
      <Tab.Screen
        name="Garden"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Garden',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/garden-icon.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#28AF6E' : '#BDBDBD' }
              ]}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/profile-icon.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#28AF6E' : '#BDBDBD' }
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  scanButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 5,
    top: -15,
  },
  scanButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#28AF6E',
    borderWidth: 4,
    borderColor: '#2CCC80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanIcon: {
    width: 24,
    height: 24,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 4,
  },
});

export default BottomTabNavigator; 