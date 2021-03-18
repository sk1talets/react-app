import React, { useContext } from 'react';
import Recipie from './Recipe';
import { RecipeContext } from './App';

export default function RecipieList({ recipes }) {
	const { handleRecipeAdd } = useContext(RecipeContext);

	return (
		<div className="recipe-list">
			<div>
				{recipes.map(recipe => {
					return (
						<Recipie key={recipe.id} {...recipe} />
					)
				})}
			</div>
			<div className="recipe-list__add-recipe-btn-container" onClick={handleRecipeAdd}>
				<button className="btn btn--primary">Add Recipe</button>
			</div>
		</div>
	);
}