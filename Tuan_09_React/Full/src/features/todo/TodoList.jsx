import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded flex-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Thêm</button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={todo.completed ? 'line-through text-gray-500' : ''}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
