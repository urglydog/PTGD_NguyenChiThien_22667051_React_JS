import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice'
import themeReducer from '../features/them/themSlice'
import cartReducer from '../features/card/cardslice'
import authReducer from '../features/auth/authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
  }
});
