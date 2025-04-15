// src/pages/DashboardPage.jsx
import React from 'react';
import Item1 from '../components/Item1';
import img1 from '../img/img1.PNG'
import img2 from '../img/2.PNG'
import img3 from '../img/3.PNG'
import img4 from '../img/4.PNG'
import img5 from '../img/5.PNG'
import img6 from '../img/6.PNG'
import img7 from '../img/7.PNG'
import img8 from '../img/8.PNG'
import RecipeDashboard from './RecipesDashBoard';
function DashboardPage() {
  const summerRecipes = [
    {
      id: 1,
      img: img1, // Replace with actual image URL
      title: 'Italian-style tomato',
      time: '14 minutes',
    },
    {
      id: 2,
      img: img2,
      title: 'Spaghetti with vegetables',
      time: '20 minutes',
    },
    {
      id: 3,
      img: img3, // Replace with actual image URL
      title: 'Lotus delight salad',
      time: '25 minutes',
    },
    {
      id: 4,
      img: img4, // Replace with actual image URL
      title: 'Snack cakes',
      time: '22 minutes',
    },
  ];

  const recipesWithVideos = [
    {
      id: 5,
      img: img5, // Replace with actual image URL
      title: 'Salad with cabbage and shrimp',
      time: '30 minutes',
    },
    {
      id: 6,
      img: img6, // Replace with actual image URL
      title: 'Salad of cove beans, shrimp and potatoes',
      time: '28 minutes',
    },
    {
      id: 7,
      img: img7, // Replace with actual image URL
      title: 'Sunny-side up fried egg',
      time: '15 minutes',
    },
    {
      id: 8,
      img: img8, // Replace with actual image URL
      title: 'Lotus delight salad',
      time: '20 minutes',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* This Summer Recipes Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#e91e63] mb-2">This Summer Recipes</h2>
          <p className="text-gray-600 mb-4">We have all your Independence Day sweets covered.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {summerRecipes.map((recipe) => (
              <Item1 key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>

        {/* Recipes With Videos Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#e91e63] mb-2">Recipes With Videos</h2>
          <p className="text-gray-600 mb-4">Cooking Up Culinary Creations with Step-by-Step Videos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recipesWithVideos.map((recipe) => (
              <Item1 key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>

      </div>
      <RecipeDashboard></RecipeDashboard>
    </div>
  );
}

export default DashboardPage;