// App.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './feature/themSlice'

function App() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]);

  return (
    <div
      style={{
        height: '100vh',
        width: "2000px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme === 'dark' ? '#222' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
        transition: 'all 0.3s ease',
      }}
    >
      <h1>{theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      >
        Chuyển Theme
      </button>
    </div>
  );
}

export default App;
