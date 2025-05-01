import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { typography } from '../../../styles/theme';
import SearchBar from './search/SearchBar';

interface HomeHeaderProps {
  username?: string;
}

const getGreeting = (): { greeting: string, emoji: string } => {
  const hours = new Date().getHours();
  
  if (hours < 12) {
    return { 
      greeting: 'Good Morning!',
      emoji: '☀️'
    };
  } else if (hours < 18) {
    return { 
      greeting: 'Good Afternoon!',
      emoji: '⛅'
    };
  } else {
    return { 
      greeting: 'Good Evening!',
      emoji: '🌙'
    };
  }
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ username = 'plant lover' }) => {
  const { greeting, emoji } = getGreeting();

  return (
    <ImageBackground
      source={require('../../../assets/images/Home-Header-Background.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Hi, {username}!</Text>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>{greeting}</Text>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 185,
    width: '100%',
    paddingTop: 26,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 14,
      justifyContent: 'space-between',
    
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: typography.fontFamily.regular,
    color: '#13231B',
      marginBottom: 4,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 24,
    fontFamily: typography.fontFamily.bold,
    color: '#13231B',
    fontWeight: 'bold',
    marginRight: 8,
  },
  emoji: {
    fontSize: 24,
    fontFamily: typography.fontFamily.bold,
    color: '#13231B',
  },
  searchContainer: {
    marginTop: 'auto',
  },
});

export default HomeHeader; 