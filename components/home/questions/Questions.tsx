import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { typography } from '../../../styles/theme';
import QuestionCard from './questionCard/QuestionCard';

const Questions = () => {
  const { questions, loading, error } = useSelector((state: RootState) => state.questions);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Hata: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Get Started</Text>
      <FlatList
        data={questions}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <QuestionCard
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image_uri={item.image_uri}
            uri={item.uri}
            onPress={() => console.log('Question pressed:', item.title)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.fontFamily.bold,
      color: '#13231B',
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  loadingText: {
    paddingHorizontal: 24,
    fontSize: 16,
    color: '#13231B',
  },
  errorText: {
    paddingHorizontal: 24,
    fontSize: 16,
    color: 'red',
  },
});

export default Questions;
