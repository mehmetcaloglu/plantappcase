import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Categories from '../../components/home/categories/Categories';
import Cupon from '../../components/home/cupon/Cupon';
import HomeHeader from '../../components/home/headers/HomeHeader';
import Questions from '../../components/home/questions/Questions';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import { fetchQuestions } from '../../redux/slices/questionsSlice';
import { AppDispatch } from '../../redux/store';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Cupon />
          <Questions />
          <Categories />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 40,
  },
});

export default HomeScreen; 