import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={styles.container}>
      <h2>Counter (useState)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(0)}>Reset</button>
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

export default Counter;
