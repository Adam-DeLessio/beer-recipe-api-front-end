import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';
// import { Route } from 'react-router-dom';
// import RecipePage from './RecipePage'

const url = 'https://beer-recipe-api.herokuapp.com'

class Recipe extends Component {
	constructor() {
		super()
		this.state = {
			recipes: []
		}
	}
	
	componentDidMount() {
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({ recipes: res })
			})
			.catch(err => {
				console.log("it gon' done broke", err)
			})
	}

	render() {
		let recipes = this.state.recipes.map(item => {
			return(
				<div key={item.id} className='recipesContainer'>
					<Link className='recipeLink' to={'/RecipePage/' + item.id}>
						<div className='recipe'>
							<h3>{item.name}</h3>
						</div>
					</Link>

				</div>
			)
		})
		return <div className='recipesList'>{recipes}</div>
	}
}



export default Recipe