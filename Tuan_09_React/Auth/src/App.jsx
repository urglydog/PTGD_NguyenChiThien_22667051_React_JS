// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [formUser, setFormUser] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (formUser.username && formUser.password) {
      dispatch(login({ username: formUser.username }));
      setFormUser({ username: '', password: '' });
    }
  };

  const handleLogout = () => dispatch(logout());

  return (
    <div className="container">
      <div className="card">
        {isLoggedIn ? (
          <>
            <h2>👋 Xin chào, <span className="username">{user.username}</span>!</h2>
            <button className="btn logout" onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <>
            <h2>🔐 Đăng nhập</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                value={formUser.username}
                onChange={(e) => setFormUser({ ...formUser, username: e.target.value })}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={formUser.password}
                onChange={(e) => setFormUser({ ...formUser, password: e.target.value })}
              />
              <button className="btn login" type="submit">Đăng nhập</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
