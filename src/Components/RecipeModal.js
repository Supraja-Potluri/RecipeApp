// src/Components/RecipeModal.js
import React from 'react';
import './RecipeModal.css';

function RecipeModal({ recipe, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>×</span>
        <h2>{recipe.label}</h2>
        <img src={recipe.image} alt={recipe.label} className="recipe-image" />
        <p><strong>Calories:</strong> {Math.round(recipe.calories)}</p>
        <p className="description">
          <em>A delightful recipe for {recipe.label} with a unique taste that you're sure to enjoy.</em>
        </p>
        <h3>Ingredients:</h3>
        <ul className="ingredient-list">
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        
        {/* Link to Recipe Instructions */}
        <h3>Instructions:</h3>
        {recipe.url ? (
          <p className="instructions">
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
              Click here for the full recipe instructions
            </a>
          </p>
        ) : (
          <p className="instructions">Instructions not available for this recipe.</p>
        )}
      </div>
    </div>
  );
}

export default RecipeModal;
