import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { typography } from '../styles/theme';

interface FeatureCardProps {
  icon: ImageSourcePropType;
  title: string;
    subtitle: string;
    firstCard?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, firstCard }) => {
  return (
    <View style={[styles.card, firstCard ? { marginLeft: 20 } : { marginLeft: 8 }]}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 156,
    height: 130,
    backgroundColor: '#1E2723',
    borderRadius: 14,
    borderColor: '#345235',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    // backgroundColor: '#101E17',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: typography.fontFamily.bold,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: typography.fontFamily.regular,
  },
});

export default FeatureCard; 