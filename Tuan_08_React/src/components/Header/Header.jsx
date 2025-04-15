import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.PNG?url'
function Header() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="" className='w-50' />
       

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-60">
          <svg
            className="w-5 h-5 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-6a7 7 0 10-14 0 7 7 0 0014 0z"
            />
          </svg>
          <input
            type="text"
            className="bg-transparent border-none outline-none text-gray-600 text-sm w-full"
            placeholder="What would you like to cook?"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 text-sm hover:text-pink-500">What to cook</a>
          <a href="#" className="text-gray-700 text-sm hover:text-pink-500">Recipes</a>
          <a href="#" className="text-gray-700 text-sm hover:text-pink-500">Ingredients</a>
          <a href="#" className="text-gray-700 text-sm hover:text-pink-500">Occasions</a>
          <a href="#" className="text-gray-700 text-sm hover:text-pink-500">About Us</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="bg-pink-100 text-pink-500 rounded-full px-4 py-2 text-sm hover:bg-pink-200">
            Login
          </button>
          <button className="bg-pink-500 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-pink-600">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Button (Hidden on larger screens) */}
        <div className="md:hidden">
          <button className="text-gray-500 hover:text-pink-500 focus:outline-none focus:text-pink-500">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, will be toggled with JavaScript) */}
      <div className="md:hidden bg-white shadow-md mt-2">
        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">What to cook</a>
        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Recipes</a>
        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Ingredients</a>
        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Occasions</a>
        <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">About Us</a>
        <a href="#" className="block py-2 px-4 text-pink-500 hover:bg-gray-100">Login</a>
        <a href="#" className="block py-2 px-4 bg-pink-500 text-white font-semibold hover:bg-pink-600">Subscribe</a>
      </div>
    </nav>
  );
}

export default Header;