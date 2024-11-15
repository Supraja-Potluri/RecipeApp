import React from 'react';

function RecipeCard({ recipe, onClick }) {
  return (
    <div style={{
      border: '1px solid #ddd', 
      padding: '1rem', 
      marginBottom: '1rem', 
      borderRadius: '8px', 
      maxWidth: '300px'
    }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{recipe.label}</h2>
      <img
        src={recipe.image}
        alt={recipe.label}
        style={{
          width: '100%', 
          maxWidth: '250px', 
          height: 'auto',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        onClick={() => onClick(recipe.id)} // Pass the recipe ID to handleRecipeClick
      />
      <p style={{ fontSize: '0.9rem', color: '#555' }}>Recipe ID: {recipe.id}</p>
    </div>
  );
}

export default RecipeCard;
