// src/App.js
import React from 'react';
import Counter from './features/counter/Counter'
import TodoList from './features/todo/TodoList';
import ThemeToggle from './features/theme/ThemeToggle'
import ShoppingCart from './features/cart/ShoppingCart';
import AuthPanel from './features/auth/AuthPanel';
import { useSelector } from 'react-redux';

export default function App() {
  const theme = useSelector(state => state.theme.mode);

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <div className="container mx-auto py-10 px-4 space-y-10">
        <h1 className="text-3xl font-bold text-center">🧠 Redux - Redux Toolkit</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">1️⃣ Counter</h2>
            <Counter />
          </div>

          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">2️⃣ To-do List</h2>
            <TodoList />
          </div>

          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">3️⃣ Toggle Theme</h2>
            <ThemeToggle />
          </div>

          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">4️⃣ Shopping Cart</h2>
            <ShoppingCart />
          </div>

          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 col-span-full">
            <h2 className="text-xl font-semibold mb-2">5️⃣ Authentication</h2>
            <AuthPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
