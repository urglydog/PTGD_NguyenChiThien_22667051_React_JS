import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './component/filter'
import Button from './component/Button'
import Header from './component/Header'
import logo from "./img/logo.PNG?url"
import avt from "./img/avt.PNG?url"
import Footer from './component/Footer'
// import LeftMenu from './component/LeftMenu'
// import FilterPanel from './component/FilterPanel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header className="header"
        img={logo}
        filterPops
        navigator={["What to cook", "Recipes", "Ingredients", "Occasions", "About us"]}
        buttonProps={{ img: "../icons/inbox.SVG", text: "Your Recipe Box", color: "#CD7595" }}
        linkImg={avt}
      ></Header>
      {/* <LeftMenu className="listProduct"/> */}
      <Footer className="footer" />
    </div>
  )
}


export default App
