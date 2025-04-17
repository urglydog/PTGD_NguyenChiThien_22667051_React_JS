import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo/todoSlice';
import themeReducer from '../features/theme/themSlice'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/users/userSlice'
import counterReducerUpdate from '../features/counterUpdate/counterSlice'
import bmiReducer from '../features/bmi/bmiSlice'
import eventReducer from '../features/event/eventSlice'
 

export const store= configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userReducer,
    counterUpdate: counterReducerUpdate,
    bmi: bmiReducer,
    event: eventReducer
  }
});
