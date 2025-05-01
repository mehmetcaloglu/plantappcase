import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { typography } from '../../../../styles/theme';

interface SearchBarProps {
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onChangeText, 
  placeholder = 'Search for plants' 
}) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../../assets/images/search-icon.png')} 
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        opacity: 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: '#BDBDBD',
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: typography.fontFamily.regular,
    color: '#000000',
  },
});

export default SearchBar; 