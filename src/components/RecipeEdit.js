import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({ recipe }) {
  return (
    <div className="recipe-edit">
      <header>
        <h3>Edit</h3>

        <div className="btn__container">
          <button>&times;</button>
        </div>
      </header>

      <div className="recipe-item__container">
        <div className="recipe-item">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={recipe.name} />
        </div>

        <div className="recipe-item">
          <label htmlFor="cookTime">Cook time</label>
          <input type="text" name="cookTime" id="cookTime" value={recipe.cookTime} />        
        </div>

        <div className="recipe-item">
          <label htmlFor="servings">Servings</label>
          <input type="number" min="1" name="servings" id="servings" value={recipe.servings} />        
        </div>

        <div className="recipe-item">
          <label htmlFor="instructions">Instructions</label>
          <textarea name="instructions" id="instructions" value={recipe.instructions} />
        </div>
      </div>


      <label>Ingredients</label>
      <div className="recipe-ingredients__container">
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit 
          key={ingredient.id}
          ingredient={ingredient}
        />
        ))}
      </div>
    </div>
  )
}
