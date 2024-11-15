import React from 'react';
import './RecipeList.css';

function RecipeList({ recipes, onRecipeClick }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
  <div key={recipe.id || recipe.uri} className="recipe-card" onClick={() => onRecipeClick(recipe.uri || recipe.id)}>
    <img src={recipe.image} alt={recipe.label} className="recipe-image" />
    <h3>{recipe.label}</h3>
  </div>
))}

    </div>
  );
}

export default RecipeList;
