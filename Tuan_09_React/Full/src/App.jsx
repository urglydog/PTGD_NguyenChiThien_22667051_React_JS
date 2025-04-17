import React from 'react';
import { useSelector } from 'react-redux';

import Counter from './features/counter/Counter';
import TodoList from './features/todo/TodoList';
import ThemeToggle from './features/theme/ThemeToggle';
import ShoppingCart from './features/cart/ShoppingCart';
import AuthPanel from './features/auth/AuthPanel';
import Users from './features/users/Users';
import CounterUpdate from './features/counterUpdate/Counter';
import BMI from './features/bmi/BMI';
import EventManager from './features/event/EventManager';

export default function App() {
  const theme = useSelector(state => state.theme.mode);

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <div className="container mx-auto py-10 px-4 space-y-10">
        <h1 className="text-3xl font-bold text-center">🧠 Redux - Redux Toolkit</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Counter */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">1️⃣ Counter</h2>
            <Counter />
          </div>

          {/* 2. To-do List */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">2️⃣ To-do List</h2>
            <TodoList />
          </div>

          {/* 3. Toggle Theme */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">3️⃣ Toggle Theme</h2>
            <ThemeToggle />
          </div>

          {/* 4. Shopping Cart */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">4️⃣ Shopping Cart</h2>
            <ShoppingCart />
          </div>

          {/* 5. Authentication */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 col-span-full">
            <h2 className="text-xl font-semibold mb-2">5️⃣ Authentication</h2>
            <AuthPanel />
          </div>

          {/* 6. Users (Async Thunk) */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 col-span-full">
            <h2 className="text-xl font-semibold mb-2">6️⃣ Đồng bộ Users (API)</h2>
            <Users />
          </div>

          {/* 7. Counter nâng cao */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">7️⃣ Counter nâng cao</h2>
            <CounterUpdate />
          </div>

          {/* 8. Form tính toán (BMI / Thuế...) */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">8️⃣ Tính BMI / Thuế</h2>
            <BMI />
          </div>

          {/* 9. Event Manager */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 col-span-full">
            <h2 className="text-xl font-semibold mb-2">9️⃣ Quản lý sự kiện</h2>
            <EventManager />
          </div>
        </div>
      </div>
    </div>
  );
}
