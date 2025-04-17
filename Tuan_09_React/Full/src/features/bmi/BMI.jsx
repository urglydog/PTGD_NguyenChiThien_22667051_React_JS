// src/features/bmi/BMI.jsx
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateResult } from './bmiSlice';

export default function BMI() {
  const dispatch = useDispatch();
  const { height, weight, result } = useSelector((state) => state.bmi);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Tính BMI</h2>
      <label htmlFor="">Chiều cao</label>
      <input
        type="number"
        placeholder="Chiều cao (cm)"
        value={height}
        onChange={(e) => dispatch(updateInput({ field: 'height', value: e.target.value }))}
        className="border p-1 mr-2"
      />
      <label htmlFor="">Cân nặng</label>
      <input
        type="number"
        placeholder="Cân nặng (kg)"
        value={weight}
        onChange={(e) => dispatch(updateInput({ field: 'weight', value: e.target.value }))}
        className="border p-1 mr-2"
      />
      <button className="btn" onClick={() => dispatch(calculateResult())}>Tính</button>
      {result && <p className="mt-2">Kết quả BMI: {result}</p>}
    </div>
  );
}
