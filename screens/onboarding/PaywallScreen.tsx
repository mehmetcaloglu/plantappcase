import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '../../redux/slices/onboardingSlice';

const PaywallScreen = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(completeOnboarding());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Premium Özellikler</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleClose}
      >
        <Text style={styles.buttonText}>Kapat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28AF6E',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PaywallScreen; 