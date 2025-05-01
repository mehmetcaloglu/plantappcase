import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  isOnboardingCompleted: boolean;
  currentStep: number;
}

const initialState: OnboardingState = {
  isOnboardingCompleted: false,
  currentStep: 0,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.isOnboardingCompleted = true;
    },
    setOnboardingStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetOnboarding: (state) => {
      state.isOnboardingCompleted = false;
      state.currentStep = 0;
    },
  },
});

export const { completeOnboarding, setOnboardingStep, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer; 