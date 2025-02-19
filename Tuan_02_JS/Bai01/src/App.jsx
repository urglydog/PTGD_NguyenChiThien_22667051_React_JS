import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [text, setText] = useState('');


var name = '';
function handleChange(e){
  name = e.target.value;
}

function handleClick(e){
  setText(name);
}

return (
  <>
  <input placeholder='Nhập tên' onChange={handleChange} type='text' />
  <button onClick={handleClick}>Click</button>
  <span>Hello {text}</span>
  </>
)
}

export default App
