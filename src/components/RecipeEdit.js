import React, { useContext } from 'react'
import { RecipeContext } from './App'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { v4 as uuidv4 } from 'uuid';


export default function RecipeEdit({ recipe }) {
  const { changeRecipe, selectRecipe } = useContext(RecipeContext);

  function change(changes) { // get all changes (differences) when modifying recipes
    changeRecipe(recipe.id, { ...recipe, ...changes });
  }

  function addIngredient() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: ''
    }

    change({ ingredients: [...recipe.ingredients, newIngredient] })
  }

  function changeIngredient(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(ingredient => ingredient.id === id);
    newIngredients[index] = ingredient;
    change({ ingredients: newIngredients });
  }

  function deleteIngredient(id) {
    change({
      ingredients: recipe.ingredients.filter(
        ingredient => ingredient.id !== id
      )
    })
  }

  return (
    <div className="recipe-edit">
      <header>
        <h3>Edit</h3>

        <div className="btn__container">
          <button
            onClick={ () => selectRecipe(undefined) }
          >
            &times;
          </button>
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
            onChange={ event => change({ name: event.target.value })} />
        </div>

        <div className="recipe-item">
          <label htmlFor="cookTime">Cook time</label>
          <input 
            type="text" 
            name="cookTime" 
            id="cookTime" 
            value={ recipe.cookTime } 
            onChange={ event => change({ cookTime: event.target.value })} />        
        </div>

        <div className="recipe-item">
          <label htmlFor="servings">Servings</label>
          <input 
            type="number" 
            min="1" 
            name="servings" 
            id="servings" 
            value={recipe.servings} 
            onChange={ event => change({ servings: parseInt(event.target.value) || '' })} />        
        </div>

        <div className="recipe-item">
          <label htmlFor="instructions">Instructions</label>
          <textarea 
            name="instructions" 
            id="instructions" 
            value={ recipe.instructions } 
            onChange={ event => change({ instructions: event.target.value })} />
        </div>
      </div>


      <label>Ingredients</label>
      <div className="recipe-ingredients__container">
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit 
          key = { ingredient.id }
          changeIngredient = { changeIngredient }
          deleteIngredient = { deleteIngredient }
          ingredient = { ingredient }
        />
        ))}

        <button 
          className="btn btn--primary"
          onClick={ () => addIngredient() }
        >
          Add ingredient
        </button>
      </div>
    </div>
  )
}
