// src/App.js
import React, { useState, useEffect } from 'react';
import RecipeList from './Components/RecipeList';
import SearchBar from './Components/SearchBar';
import RecipeModal from './Components/RecipeModal';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const APP_ID = '9f968cfa';
  const APP_KEY = 'd40051db0b5765889502d8de7b2d2b65';

  // Sample recipes to display initially
  // src/App.js

const defaultRecipes = [
  {id:1,
    label: 'Veg Biryani',
    image: 'https://th.bing.com/th?id=OSK.99f6a53d7e6170113df39540d4afae0d&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
    calories: 350,
    ingredientLines: ['Basmati Rice', 'Mixed Vegetables', 'Spices', 'Onion', 'Coriander','Mint Leaves','Green Peas','Masala powder'],
    url: 'https://example.com/veg-biryani'
  },
  {id:2,
    label: 'Pani Puri',
    image: 'https://th.bing.com/th/id/OIP.Edl3Bj4iO_X9VcmVT_0pkQHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 200,
    ingredientLines: ['Puri', 'Spiced Water', 'Potato', 'Chickpeas', 'Onion'],
    url: 'https://example.com/pani-puri'
  },
  {id:3,
    label: 'Maggi',
    image: 'https://th.bing.com/th/id/OIP.xWAjFvgrl2p2q5n92hxMGwHaEH?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 600,
    ingredientLines: ['Maggi Noodles', 'Cheese', 'Vegetables', 'Pizza Sauce'],
    url: 'https://example.com/maggi'
  },
  {id:4,
    label: 'Maggi Noodle Cutlet',
    image: 'https://th.bing.com/th/id/OIP.SfKAFs5Hdm2RxPCvnD0MLgHaFo?w=239&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 400,
    ingredientLines: ['Maggi Noodles', 'Potato', 'Spices', 'Bread Crumbs'],
    url: 'https://example.com/maggi-cutlet'
  },
  {id:5,
    label: 'Samosa',
    image: 'https://th.bing.com/th/id/OIP.qHJIzQ-WXnx8QZBmQRaPHQHaE3?w=282&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 250,
    ingredientLines: ['Potato', 'Spices', 'Flour', 'Peas', 'Oil'],
    url: 'https://example.com/samosa'
  },
  {id:6,
    label: 'Vegan Pizza',
    image: 'http://ts4.mm.bing.net/th?id=OIP.RSM7JE-uTEL3bt8p92DezQHaLH&pid=15.1',
    calories: 500,
    ingredientLines: ['Pizza Base', 'Tomato Sauce', 'Vegetables', 'Vegan Cheese'],
    url: 'https://example.com/vegan-pizza'
  },
  {id:7,
    label: 'Veggie Burger',
    image: 'https://th.bing.com/th/id/OIP.BFXTXw0InfmOmJkzlSW6FgAAAA?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 350,
    ingredientLines: ['Veggie Patty', 'Bun', 'Lettuce', 'Tomato', 'Sauce','Onions','Cheese','Mayonnaise','Salt'],
    url: 'https://example.com/veggie-burger'
  },
  {id:8,
    label: 'Chicken Lollipop',
    image: 'https://th.bing.com/th/id/OIP.EJ3xpGaJ0yO3f9_O2KBvBQHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 600,
    ingredientLines: ['Chicken Wings', 'Spices', 'Sauce','Oil'],
    url: 'https://example.com/chicken-lollipop'
  },
  {id:9,
    label: 'Potato Chips',
    image: 'https://th.bing.com/th/id/OIP.SFLE-t_GoWn8CNTcuE5W6QHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 300,
    ingredientLines: ['Potato', 'Salt', 'Oil'],
    url: 'https://example.com/potato-chips'
  },
  {id:10,
    label: 'Strawberry Banana Smoothie',
    image: 'https://th.bing.com/th/id/OIP.yKVUiNxmMUSuHOV6SuZVewHaLG?w=128&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 150,
    ingredientLines: ['Strawberries', 'Banana', 'Milk', 'Yogurt','Honey'],
    url: 'https://example.com/smoothie'
  },
  {id:11,
    label: 'Pista Kulfi Recipe',
    image: 'https://th.bing.com/th/id/OIP.6FiRo1BcZ6slH_AqT4le-AHaGU?w=221&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 250,
    ingredientLines: ['Milk', 'Pistachios', 'Sugar', 'Cream'],
    url: 'https://example.com/pista-kulfi'
  },
  {id:12,
    label: 'Aloo Fry',
    image: 'https://th.bing.com/th/id/OIP.xVkTD6Ohr0aqhGYnxbuozwHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    calories: 200,
    ingredientLines: ['Potatoes', 'Spices', 'Oil'],
    url: 'https://example.com/aloo-fry'
  }
];

  useEffect(() => {
    if (searchTerm) {
      async function fetchData() {
        try {
          const response = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`);
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          setRecipes(data.hits.map(hit => hit.recipe) || []);
        } catch (error) {
          console.error('Error fetching recipes:', error);
          setRecipes(defaultRecipes); // Set default recipes in case of an error
        }
      }
      fetchData();
    } else {
      setRecipes(defaultRecipes); // Display default recipes when no search term
    }
  }, [searchTerm]);

  const handleRecipeClick = (recipeUri) => {
    // Use the id property for default recipes and uri for fetched recipes
    const recipe = recipes.find((r) => r.uri === recipeUri || r.id === recipeUri);
    setSelectedRecipe(recipe);
    document.body.classList.add('scroll-lock'); // Lock scroll on main page
  };
  

  const closeModal = () => {
    setSelectedRecipe(null);
    document.body.classList.remove('scroll-lock'); // Remove scroll lock
  };

  return (
    <div className="app">
    <h1>Recipe Application</h1>
    <SearchBar onSearch={(term) => setSearchTerm(term)} />
    <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
    {selectedRecipe && (
      <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
    )}
  </div>
  );
}

export default App;