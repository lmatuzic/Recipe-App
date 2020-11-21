import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
  const { recipes, addRecipe, deleteRecipe } = props;

  return (
    <>
      <div className="recipe-list">
        {recipes.map(recipe => {
          return (
            <Recipe 
              key={recipe.id} 
              {...recipe}
              deleteRecipe={deleteRecipe}
            />
          ) 
        })}


        <div className="btn__container">
          <button
            className="btn btn--primary"
            onClick={addRecipe}
           >
            Add Recipe
          </button>
        </div>
      </div>
    </>
  )
}
