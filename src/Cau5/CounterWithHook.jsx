import React from "react";
import useCounter from "./useCounter";

const CounterWithHook = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div style={styles.container}>
      <h2>Counter with Custom Hook</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
      <button onClick={reset}>Reset</button>
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

export default CounterWithHook;
