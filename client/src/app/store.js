import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../features/tasks/carSlice';

export const store = configureStore({
  reducer: {
    Cars: carSlice,
  },
});
