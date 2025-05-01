import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import onboardingReducer from './slices/onboardingSlice';
import questionsReducer from './slices/questionsSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    questions: questionsReducer,
    categories: categoriesReducer,
  },
});

// RootState ve AppDispatch tiplerini export et
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 