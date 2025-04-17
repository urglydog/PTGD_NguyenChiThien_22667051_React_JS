// src/features/bmi/bmiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: {
    height: 0,
    weight: 0,
    result: null,
  },
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateResult: (state) => {
      const heightInMeters = state.height / 100;
      const bmi = state.weight / (heightInMeters * heightInMeters);
      state.result = bmi.toFixed(2); // Giới hạn kết quả BMI đến 2 chữ số thập phân
    },
  },
});

export const { updateInput, calculateResult } = bmiSlice.actions;
export default bmiSlice.reducer;
