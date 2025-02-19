import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [result, setResult] = useState("");
const [a, setA] = useState(0);
const [b, setB] = useState(0);


function handleChangeA(e){
  setA(e.target.value);
}

function handleChangeB(e){
  setB(e.target.value);
}

function handleClick(e){
  setResult(parseInt(a)+parseInt(b));
}

return (
  <>
  <input placeholder='a' onChange={handleChangeA} type='text' />
  <br />
  <input placeholder='b' onChange={handleChangeB} type='text' />
  <br />
  <button onClick={handleClick}>Calculate</button>
  <br />
  <span>{result}</span>
  </>
)
}

export default App
