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
      yeast: '',
      additional: ''
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
        this.setState({ additional: res[0].method.twist })
      })
      .catch(err => {
        console.error(err)
      })
  }


  render() {
    let malts = this.state.malt.map(malt => {
      return(
        <li key={malt._id}>{malt.name}: {malt.amount.value} {malt.amount.unit}</li>
      )
    })
    let hops = this.state.hops.map(hops => {
      return(
        <li key={hops._id}>{hops.name}: {hops.amount.value} {hops.amount.unit}</li>
      )
    })
    return(
      <div>
        <h1>{this.state.recipe.name} <span className='tagline'>({this.state.recipe.tagline})</span></h1>
        <h3>Brewer's Tips</h3>
        <p>{this.state.recipe.brewers_tips}</p>
        <div className='ingredients'>
          <h3>Malts</h3>
          <div>
            <ul>{malts}</ul>
          </div>
          <h3>Hops</h3>
          <div>
            <ul>{hops}</ul>
          </div>
          <h3>Yeast</h3>
          <p>{this.state.yeast}</p>
          <h3>Additional ingredients</h3>
          <p>{this.state.additional}</p>
        </div>
        <div className='process'>

        </div>

      </div>
    )
  }
}

export default RecipePage















