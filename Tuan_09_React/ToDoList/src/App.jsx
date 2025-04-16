// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './feature/todos/todoSlice'

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center' }}>
      <h1>✅ To-do List (Redux Toolkit)</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px', marginLeft: '5px' }}>
        Thêm
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ marginLeft: '10px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
