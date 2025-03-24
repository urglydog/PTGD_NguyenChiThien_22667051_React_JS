import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Contact from './pages/Contact'
import { CarProvider } from './context/cardProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path='/thucdon' element={<Menu />}></Route>
              <Route path='/lienhe' element={<Contact />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CarProvider>

    </>
  )
}

export default App
