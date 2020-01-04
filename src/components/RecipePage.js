import React, { Component } from "react";
import "./RecipePage.css";
// import { Link } from 'react-router-dom';
// import Recipe from './Recipe'


class RecipePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: '',
      malt: [],
      hops: [],
      yeast: ''
		}
	}

  componentDidMount() {
  	let id = this.props.match.params._id
    let newUrl = 'https://beer-recipe-api.herokuapp.com/_id/' + id

    fetch(newUrl)
      .then(res => res.json())
      .then(res => {
      	this.setState({ recipe: res[0] })
        this.setState({ malt: res[0].ingredients.malt })
        this.setState({ hops: res[0].ingredients.hops })
        this.setState({ yeast: res[0].ingredients.yeast })
      })
      .catch(err => {
        console.error(err)
      })
  }


  render() {
    return(
      <div>
        <h1>{this.state.recipe.name} <span className='tagline'>({this.state.recipe.tagline})</span></h1>
        <h3>Brewer's Tips</h3>
        <p>{this.state.recipe.brewers_tips}</p>
        <h3>Ingredients</h3>
        <div></div>
      </div>
    )
  }
}

export default RecipePage















