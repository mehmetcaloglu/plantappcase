import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { typography } from '../../../../styles/theme';

export interface QuestionCardProps {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  onPress?: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  image_uri,
  onPress,
}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity  onPress={onPress} activeOpacity={0.8} style={styles.container}>
            <ImageBackground
                source={{ uri: image_uri }}
                style={styles.backgroundImage}
                imageStyle={styles.imageStyle}
            >
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
  },
  backgroundImage: {
    width: 240,
    height: 164,
    justifyContent: 'flex-end',
    padding: 16,
  },
  imageStyle: {
    borderRadius: 12,
  },
  title: {
    color: '#FFFFFF',
      fontSize: 17,
    fontFamily: typography.fontFamily.bold,
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default QuestionCard;
