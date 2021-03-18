import React, { useState } from 'react';
import RecipieList from './RecipeList';
import { v4 as uuid } from 'uuid';
import '../css/app.css';

function App() {
	const [recipes, setRecipes] = useState(sampleRecipes);

	function handleRecipeAdd() {
		const newRecipe = {
			id: uuid(),
			name: 'New Recipe',
			servings: 1,
			cookingTime: '1:00',
			instructions: 'Instructions',
			ingredients: [
				{ id: uuid(), name: 'Name', amount: '1 tbs' }
			]
		};
	
		setRecipes([...recipes, newRecipe])
	}

	function handleRecipeDelete(id) {
		setRecipes(recipes.filter(recipe => recipe.id !== id));
	}

	return (
		<RecipieList
			recipes={recipes}
			handleRecipeAdd={handleRecipeAdd}
			handleRecipeDelete={handleRecipeDelete}
		/>
	);
}

const sampleRecipes = [
	{
		id: 1,
		name: 'Plain Chicken',
		servings: 3,
		cookingTime: '1:45',
		instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
		ingredients: [
			{ id: 1, name: 'chicken', amount: '2 pounds'},
			{ id: 2, name: 'salt', amount: '1 tbs'},
		]
	},
	{
		id: 2,
		name: 'Plain Pork',
		servings: 5,
		cookingTime: '0:45',
		instructions: "1. Put paprika on pork.\n2. Put pork in oven.\n3. Eat pork",
		ingredients: [
			{ id: 1, name: 'pork', amount: '3 pounds'},
			{ id: 2, name: 'paprika', amount: '2 tbs'},
		]

	}
];

export default App;
