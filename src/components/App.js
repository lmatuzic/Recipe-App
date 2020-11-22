import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import { v4 as uuidv4 } from 'uuid';
import '../css/main.scss'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'RecipeApp.recipes';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON !== null) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []) // call only 1 time - on load (load recipes from localStorage)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]); // call every time recipe change

  const recipeContextValue = {
    addRecipe: addRecipe,
    deleteRecipe: deleteRecipe,
    selectRecipe: selectRecipe,
    changeRecipe: changeRecipe
  };

  function selectRecipe(id) {
    setSelectedRecipeId(id);
  }

  function addRecipe() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }
  
    setSelectedRecipeId(newRecipe.id); // open edit automatically for newly added recipe
    setRecipes([...recipes, newRecipe])
  }

  function changeRecipe(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(recipe => recipe.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function deleteRecipe(id) {
    if (selectedRecipeId !== null && selectedRecipeId === id)
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
        recipes={recipes} 
      />
      { selectedRecipe && <RecipeEdit recipe={selectedRecipe} /> /* hide edit when recipe is not yet selected */ } 
    </RecipeContext.Provider>
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
