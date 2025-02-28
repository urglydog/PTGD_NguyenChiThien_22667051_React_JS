import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './component/filter'
import Button from './component/Button'
import Header from './component/Header'
import logo from "./img/logo.PNG?url"
import avt from "./img/avt.PNG?url"
// import FilterPanel from './component/FilterPanel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header
        img={logo}
        filterPops
        navigator={["What to cook", "Recipes", "Ingredients", "Occasions", "About us"]}
        buttonProps={{ img: "../icons/inbox.SVG", text: "Your Recipe Box", color: "#CD7595" }}
        linkImg={avt}
      ></Header>

      {/* <FilterPanel
        cookingMethods={[
          "Grilled",
          "Roasted",
          "Pan-fried",
          "Stir-fried",
          "Sauteed",
          "Baked",
          "Steamed",
          "Stewed"]}
        themeColor="CD7595"
      ></FilterPanel> */}
    </>
  )
}


export default App
