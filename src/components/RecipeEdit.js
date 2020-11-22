import React, { useContext } from 'react'
import { RecipeContext } from './App'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({ recipe }) {
  const { changeRecipe } = useContext(RecipeContext);

  function change(changes) { // get all changes (differences) when modifying recipes
    changeRecipe(recipe.id, { ...recipe, ...changes });
  }

  function changeIngredient(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(ingredient => ingredient.id === id);
    newIngredients[index] = ingredient;
    change({ ingredients: newIngredients });
  }

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
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={ recipe.name } 
            onInput={ event => change({ name: event.target.value })} />
        </div>

        <div className="recipe-item">
          <label htmlFor="cookTime">Cook time</label>
          <input 
            type="text" 
            name="cookTime" 
            id="cookTime" 
            value={ recipe.cookTime } 
            onInput={ event => change({ cookTime: event.target.value })} />        
        </div>

        <div className="recipe-item">
          <label htmlFor="servings">Servings</label>
          <input 
            type="number" 
            min="1" 
            name="servings" 
            id="servings" 
            value={recipe.servings} 
            onInput={ event => change({ servings: parseInt(event.target.value) || '' })} />        
        </div>

        <div className="recipe-item">
          <label htmlFor="instructions">Instructions</label>
          <textarea 
            name="instructions" 
            id="instructions" 
            value={ recipe.instructions } 
            onInput={ event => change({ instructions: event.target.value })} />
        </div>
      </div>


      <label>Ingredients</label>
      <div className="recipe-ingredients__container">
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit 
          key={ ingredient.id }
          ingredient={ ingredient }
          changeIngredient={ changeIngredient }
        />
        ))}
      </div>
    </div>
  )
}
