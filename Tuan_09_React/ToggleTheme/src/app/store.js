// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../feature/themSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
