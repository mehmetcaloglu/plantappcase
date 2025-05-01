import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Cupon = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.contentContainer}>
        <View style={styles.leftContent}>
          <Image
            source={require('../../../assets/images/Mail-Icon.png')}
            style={styles.mailIcon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>FREE Premium Available</Text>
            <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/arrow.png')}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24201A',
    borderRadius: 12,
        marginHorizontal: 24,
    marginTop:24,
    // marginVertical: 24,
    padding: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mailIcon: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  textContainer: {
    flexDirection: 'column',
  },
  title: {
    color: '#E5C990',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#E5C990',
    fontSize: 13,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: '#E5C990',
  },
});

export default Cupon;
