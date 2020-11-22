import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
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
          <input type="text" name="name" id="name" />
        </div>

        <div className="recipe-item">
          <label htmlFor="cookTime">Cook time</label>
          <input type="text" name="cookTime" id="cookTime" />        
        </div>

        <div className="recipe-item">
          <label htmlFor="servings">Servings</label>
          <input type="number" min="1" name="servings" id="servings" />        
        </div>

        <div className="recipe-item">
          <label htmlFor="instructions">Instructions</label>
          <textarea name="instructions" id="instructions" />
        </div>
      </div>


      <label>Ingredients</label>
      <div className="recipe-ingredients__container">
        <div className="recipe-ingredient">
          <RecipeIngredientEdit />
        </div>
      </div>
    </div>
  )
}
