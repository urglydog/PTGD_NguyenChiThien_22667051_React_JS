import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import MenuList from './components/MenuList'
import BookTable from './components/BookTable.jsx'
import Item from './components/Item.jsx'
import p1 from "./img/p1.jfif?url"
import p2 from "./img/p2.jfif?url"
import p3 from "./img/p3.jfif?url"
import p4 from "./img/p4.jfif?url"
import p5 from "./img/p5.jfif?url"
import p6 from "./img/p6.jfif?url"

function App() {
  const [Item, setItem] = useState(null)

  return (
    <>
      <div className="container">
      <Header/>
        <MenuList></MenuList>
        <BookTable></BookTable>
        <Footer></Footer>
      </div>
    </>
  )
}




export default App



