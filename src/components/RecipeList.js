import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList(props) {
  const { recipes } = props;
  const { addRecipe } = useContext(RecipeContext);

  return (
    <>
      <div className="recipe-list">
        {recipes.map(recipe => {
          return (
            <Recipe 
              key={recipe.id} 
              {...recipe}
            />
          ) 
        })}

        <div className="btn__container">
          <button
            className="btn btn--primary"
            onClick = { addRecipe }
           >
            Add Recipe
          </button>
        </div>
      </div>
    </>
  )
}
