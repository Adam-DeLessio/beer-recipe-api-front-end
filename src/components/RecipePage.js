import React, { Component } from "react";
import "./RecipePage.css";
import { Link } from 'react-router-dom';
import Recipe from './Recipe'


class RecipePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: []
		}
	}

  componentDidMount() {
  	let id = this.props.match.params.id
    let newUrl = 'https://beer-recipe-api.herokuapp.com/id/' + id

    fetch(newUrl)
      .then(res => res.json())
      .then(res => {
      	this.setState({ recipe: res[0] })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return(
      <div>
        <h1>{this.state.recipe.name}</h1>
        <h3>{this.state.recipe.tagline}</h3>
      </div>
    )
  }
}

export default RecipePage