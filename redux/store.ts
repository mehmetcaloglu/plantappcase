import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    // Diğer reducerlar buraya eklenecek
  },
});

// RootState ve AppDispatch tiplerini export et
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 