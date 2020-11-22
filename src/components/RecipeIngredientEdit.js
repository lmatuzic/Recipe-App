import React from 'react'

export default function RecipeIngredientEdit(props) {
  const { ingredient, changeIngredient, deleteIngredient } = props;

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
            onChange={ event => change({ name: event.target.value })}
          />
        </div>

        <div>
          <label>Amount</label>
          <input 
            type="text" 
            value={ingredient.amount} 
            onChange={ event => change({ amount: event.target.value })}  
          />
        </div>

        <div>
          <span>&nbsp;</span>
          <button
            onClick = { () => deleteIngredient(ingredient.id) }
          >
            &times;
          </button>
        </div>
      </div>
    </>
  )
}
