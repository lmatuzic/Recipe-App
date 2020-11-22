import React from 'react'

export default function RecipeIngredientEdit(props) {
  const { ingredient, changeIngredient } = props;

  function change(changes) { 
    changeIngredient(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <div className="recipe-ingredient">
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={ingredient.name} 
            onInput={ event => change({ name: event.target.value })}
          />
        </div>

        <div>
          <label>Amount</label>
          <input 
            type="text" 
            value={ingredient.amount} 
            onInput={ event => change({ name: event.target.value })}  
          />
        </div>

        <div>
          <span>&nbsp;</span>
          <button>&times;</button>
        </div>
      </div>
    </>
  )
}
