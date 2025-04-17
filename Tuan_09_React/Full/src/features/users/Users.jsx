// src/features/users/Users.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export default function Users() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Danh sách người dùng</h2>
      <ul className="space-y-1">
        {users.map(user => (
          <li key={user.id} className="border p-2 rounded bg-white shadow">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
