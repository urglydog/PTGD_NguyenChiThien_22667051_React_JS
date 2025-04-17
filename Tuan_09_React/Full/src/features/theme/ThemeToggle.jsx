import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themSlice';

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())} className="px-4 py-2 bg-indigo-500 text-white rounded">
      Chế độ hiện tại: {theme} (nhấn để đổi)
    </button>
  );
}
