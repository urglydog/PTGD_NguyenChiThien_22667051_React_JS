import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice'
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Bộ đếm Redux Toolkit</h1>
      <div className="counter">
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        {/* khi click gọi dispath, action gửi đến reducer -> state trong store thay đổi  */}
        {/* component cập nhật giao diện thông qua useSelector  */}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;