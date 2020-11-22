import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'

export default function Recipe(props) {
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  const { deleteRecipe, selectRecipe } = useContext(RecipeContext);
  
  return (
    <div className="recipe">
      <h3>{ name }</h3>

      <div className="recipe__item">
        <strong>Cook time: </strong>
        <span>{ cookTime }</span>
      </div>

      <div className="recipe__item">
        <strong>Servings: </strong>
        <span>{ servings }</span>
      </div>

      <div className="recipe__item">
        <strong>Instructions:</strong>
        <div>{ instructions }</div>
      </div>

      <div className="recipe__item">
        <strong>Ingredients:</strong>
        <div><IngredientList ingredients={ ingredients } /></div>
      </div>

      <div className="recipe__cta">
        <button onClick={() => selectRecipe(id)} className="btn btn--primary">Edit</button>
        <button onClick={() => deleteRecipe(id)} className="btn btn--secondary">Delete</button>
      </div>
    </div>
  )
}
