import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-4xl font-bold">{count}</div>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded-xl">
          ➕ Tăng
        </button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded-xl">
          ➖ Giảm
        </button>
      </div>
    </div>
  );
}
