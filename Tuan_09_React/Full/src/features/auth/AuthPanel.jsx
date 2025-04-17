import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authSlice';

export default function AuthPanel() {
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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {isLoggedIn ? (
        <>
          <h2 className="text-xl font-bold mb-4">
            👋 Xin chào, <span className="text-blue-600">{user.username}</span>!
          </h2>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">🔐 Đăng nhập</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={formUser.username}
              onChange={(e) => setFormUser({ ...formUser, username: e.target.value })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={formUser.password}
              onChange={(e) => setFormUser({ ...formUser, password: e.target.value })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            >
              Đăng nhập
            </button>
          </form>
        </>
      )}
    </div>
  );
}
