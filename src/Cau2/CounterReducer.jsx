import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={styles.container}>
      <h2>Counter (useReducer)</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("INCREASE")}>Tăng</button>
      <button onClick={() => dispatch("DECREASE")}>Giảm</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    border: "1px solid black",
    padding: "20px",
    width: "200px",
    margin: "auto",
  },
};
export default CounterReducer;
