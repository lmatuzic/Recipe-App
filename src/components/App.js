import React, { useState } from 'react'
import RecipeList from './RecipeList'
import { v4 as uuidv4 } from 'uuid';
import '../css/main.scss'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function addRecipe() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instruc.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'name',
          amount: '1 Tbs'
        }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  function deleteRecipe(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeList 
      recipes={recipes} 
      addRecipe={addRecipe}  
      deleteRecipe={deleteRecipe}
    />
  );
}


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put salt on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;
