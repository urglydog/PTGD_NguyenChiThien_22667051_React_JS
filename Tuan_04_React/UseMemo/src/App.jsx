import { useReducer, useMemo } from 'react';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "SET_A":
      return { ...state, a: action.payload };
    case "SET_B":
      return { ...state, b: action.payload };
    case "SET_OPERATION":
      return { ...state, operation: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { a: 0, b: 0, operation: "+", result: "" });

  // Dùng useMemo để tính toán kết quả
  const result = useMemo(() => {
    const a = parseFloat(state.a) || 0;
    const b = parseFloat(state.b) || 0;
    
    switch (state.operation) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b !== 0 ? a / b : "Không thể chia cho 0";
      default: return "";
    }
  }, [state.a, state.b, state.operation]); // Chỉ re-calculate khi a, b hoặc operation thay đổi

  return (
    <>
      <input
        placeholder="a"
        onChange={(e) => dispatch({ type: "SET_A", payload: e.target.value })}
        type="number"
      />
      <br />
      <input
        placeholder="b"
        onChange={(e) => dispatch({ type: "SET_B", payload: e.target.value })}
        type="number"
      />
      <br />
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "+" })}>+</button>
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "-" })}>-</button>
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "*" })}>*</button>
      <button onClick={() => dispatch({ type: "SET_OPERATION", payload: "/" })}>/</button>
      <br />
      <br />
      <span>Kết quả: {result}</span>
    </>
  );
}

export default App;
