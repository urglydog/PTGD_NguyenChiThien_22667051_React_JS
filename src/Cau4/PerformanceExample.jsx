import React, { useState, useMemo, useCallback } from "react";
// React.memo Example
const ExpensiveComponent = React.memo(({ number }) => {
  console.log("Rendering ExpensiveComponent");
  return <p>Squared: {number * number}</p>;
});
// useMemo Example
const computeExpensiveValue = (num) => {
  console.log("Computing...");
  return num * 2;
};
// useCallback Example
const Button = React.memo(({ handleClick }) => {
  console.log("Rendering Button");
  return <button onClick={handleClick}>Click me</button>;
});
const PerformanceExample = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(5);

  const memoizedValue = useMemo(() => computeExpensiveValue(value), [value]);
  const handleClick = useCallback(() => setCount(count + 1), [count]);
  return (
    <div style={styles.container}>
      <h2>Performance Example</h2>
      <p>Count: {count}</p>
      <p>Expensive Value: {memoizedValue}</p>
      <ExpensiveComponent number={value} />
      <Button handleClick={handleClick} />
      <button onClick={() => setValue(value + 1)}>Increase Value</button>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    border: "1px solid black",
    padding: "20px",
    width: "300px",
    margin: "auto",
  },
};

export default PerformanceExample;
