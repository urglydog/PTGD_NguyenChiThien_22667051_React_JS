import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset, setStep } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counterUpdate.value);
  const step = useSelector((state) => state.counterUpdate.step);
  const dispatch = useDispatch();

  const handleStepChange = (e) => {
    const value = e.target.value;
    dispatch(setStep(value === '' ? 1 : Number(value)));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-4xl font-bold">{count}</div>

      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
        >
          ➕ Tăng
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded-xl"
        >
          ➖ Giảm
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => dispatch(incrementByAmount(step))}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
        >
          Tăng theo {step}
        </button>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          className="border p-1 w-20 text-center"
        />
      </div>

      <button
        onClick={() => dispatch(reset())}
        className="px-4 py-2 bg-yellow-500 text-black rounded-xl"
      >
        ♻️ Reset
      </button>
    </div>
  );
}
