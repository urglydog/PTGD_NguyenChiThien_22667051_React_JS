import { useState } from 'react'

import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home'
import Project from './pages/Project/Project'
import Teams from './pages/Teams/Teams'
import Messages from './pages/Messages/Messages'
import Intergrations from './pages/Intergrations/Intergrations'
import Analytics from './pages/Analytics/Analytics'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
            <Route path='/team' element={<Teams/>}></Route>
            <Route path='/analystic' element={<Analytics/>}></Route>
            <Route path='/messages' element={<Messages/>}></Route>
            <Route path='/intergration' element={<Intergrations/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
