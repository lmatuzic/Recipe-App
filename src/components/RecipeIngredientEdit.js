import React from 'react'

export default function RecipeIngredientEdit({ ingredient }) {
  return (
    <>
      <div className="recipe-ingredient">
        <div>
          <label>Name</label>
          <input type="text" value={ingredient.name} />
        </div>

        <div>
          <label>Amount</label>
          <input type="text" value={ingredient.amount} />
        </div>

        <div>
          <span>&nbsp;</span>
          <button>&times;</button>
        </div>
      </div>
    </>
  )
}
