import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Layout from "./pages/Layout"
import DashboardPage from './pages/DashboardPage';
import "./App.css"
// Import your other components/pages

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<DashboardPage/>} />
          <Route path="/what-to-cook" element={<div>What to Cook Page</div>} />
          <Route path="/recipes" element={<div>Recipes Page</div>} />
          <Route path="/ingredients" element={<div>Ingredients Page</div>} />
          <Route path="/occasions" element={<div>Occasions Page</div>} />
          <Route path="/about-us" element={<div>About Us Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/subscribe" element={<div>Subscribe Page</div>} />
        </Route>
        {/* Add more routes for your application */}
      </Routes>
    </BrowserRouter>



  );
}

export default App;