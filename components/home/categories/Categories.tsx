import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CategoryCard from './categoryCard/CategoryCard';

const Categories = () => {
  const { categories, loading, error } = useSelector((state: RootState) => state.categories);

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
    <View style={ styles.container }>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={ styles.columnWrapper }
        nestedScrollEnabled={ true }
        scrollEnabled={false}
        renderItem={({ item }) => (
          <CategoryCard
            id={item.id}
            title={item.title}
            imageUrl={item.image.url}
            onPress={() => console.log('Category pressed:', item.title)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  loadingText: {
    fontSize: 16,
    color: '#13231B',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default Categories;
