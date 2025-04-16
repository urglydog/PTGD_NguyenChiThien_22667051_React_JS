import { useState } from 'react'
import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case "SET_A":
      return { ...state, a: action.payload };
    case "SET_B":
      return { ...state, b: action.payload };
    case "ADD":
      return { ...state, result: parseFloat(state.a) + parseFloat(state.b) };
    case "SUBTRACT":
      return { ...state, result: parseFloat(state.a) - parseFloat(state.b) };
    case "MULTIPLY":
      return { ...state, result: parseFloat(state.a) * parseFloat(state.b) };
    case "DIVIDE":
      return {
        ...state,
        result: state.b !== "0" ? parseFloat(state.a) / parseFloat(state.b) : "Không thể chia cho 0",
      };
    default:
      return state;
  }
}
function App() {

  // const [state, dispatch] = useReducer(reducer, { a: 0, b: 0, result: "" });

  // return (
  //   <>
  //     <input
  //       placeholder="a"
  //       onChange={(e) => dispatch({ type: "SET_A", payload: e.target.value })}
  //       type="number"
  //     />
  //     <br />
  //     <input
  //       placeholder="b"
  //       onChange={(e) => dispatch({ type: "SET_B", payload: e.target.value })}
  //       type="number"
  //     />
  //     <br />
  //     <button onClick={() => dispatch({ type: "ADD" })}>+</button>
  //     <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
  //     <button onClick={() => dispatch({ type: "MULTIPLY" })}>*</button>
  //     <button onClick={() => dispatch({ type: "DIVIDE" })}>/</button>
  //     <br />
  //     <br />
  //     <span>{state.result}</span>
  //   </>
  // );



  const [count, dispatch] = useReducer(reducer, { count: 0 })
  // state hiện tại có tên là count và có thuộc tính count
  function reducer(state, action) {
    switch (action.type) {
      case "+":
        return { state, count: state.count + 1 };

      case "-":
        return { state, count: state.count - 1 };
    }
  }
  function handlePlus() {
    dispatch({ type: "+" })
  }
  function handleMinus() {
    dispatch({ type: "-" })
  }
  return (
    <>
      {/* <input type="numer" name="" id=""  placeholder='Value'/> */}
      {/* <span>{count.count}</span>
    <br />
    <button onClick={handleClickAddition}>Addition</button>
    <br />
    <button onClick={handleClickMinus}>Minus</button> */}
      <h1>Use Reducer</h1>
      <span>{count.count}</span>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  )
}

export default App
