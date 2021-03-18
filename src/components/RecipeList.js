import React from 'react';
import Recipie from './Recipe';

export default function RecipieList(props) {
	const {
		recipes,
		handleRecipeAdd,
		handleRecipeDelete,
	} = props;

	return (
		<div className="recipe-list">
			<div>
				{recipes.map(recipe => {
					return (
						<Recipie
							key={recipe.id}
							handleRecipeDelete={handleRecipeDelete}
							{...recipe}
						/>
					)
				})}
			</div>
			<div className="recipe-list__add-recipe-btn-container" onClick={handleRecipeAdd}>
				<button className="btn btn--primary">Add Recipe</button>
			</div>
		</div>
	);
}