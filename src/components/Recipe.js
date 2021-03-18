import React from 'react'
import IngredientsList from './IngredientsList';

export default function Recipie(props) {
	const {
		name,
		cookingTime,
		servings,
		instructions,
		ingredients,
	} = props;

	return (
		<div className="recipe">
			<div className="recipe__header">
				<h3 className="recipe__title">{name}</h3>
				<div>
					<button className="btn btn--primary mr-1">Edit</button>
					<button className="btn btn--danger ">Delete</button>
				</div>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Cooking time:</span>
				<span className="recipe__value">{cookingTime}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Servings:</span>
				<span className="recipe__value">{servings}</span>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Instructions:</span>
				<div className="recipe__value recipe__instructions recipe__value--indented">{instructions}</div>
			</div>
			<div className="recipe__row">
				<span className="recipe__label">Ingredients:</span>
				<div className="recipe__value recipe__value--indented">
					<IngredientsList ingredients={ingredients}/>
				</div>
			</div>	
		</div>
	)
}
