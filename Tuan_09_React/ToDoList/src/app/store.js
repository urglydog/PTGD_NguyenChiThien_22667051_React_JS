// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todos/todoSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
