import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { typography } from '../../../../styles/theme';

export interface CategoryCardProps {
  id: number;
  title: string;
  imageUrl: string;
  onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create( {
  container: {
    width: 158,
    height: 152,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    margin: 6,
    borderWidth: 1,
    borderColor: '#29BB892E',
  },
  title: {
    position: 'absolute',
    marginTop: 12,
    marginLeft: 12,
    maxWidth: 80,
    height: 50,
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: typography.fontFamily.bold,
    color: '#13231B',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 158,
    height: 152,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    height: 152,
    width: 158,
  },
});

export default CategoryCard;
