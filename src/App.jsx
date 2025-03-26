import React from "react";
import Counter from "./Cau1/Counter"
import CounterReducer from "./Cau2/CounterReducer"
import PostList from "./Cau3/PostList"
import PerformanceExample from "./Cau4/PerformanceExample"
import CounterWithHook from "./Cau5/CounterWithHook"

const App = () => {
  return (
    <div>
      <Counter />
      <CounterReducer />
      <PostList />
      <PerformanceExample />
      <CounterWithHook />
    </div>
  );
};

export default App;
