import React, { Component } from "react";
import "./RecipePage.css";
// import { Link } from 'react-router-dom';
// import Recipe from './Recipe'


class RecipePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: '',
      volume: '',
      boilVolume: '',
      fermentation: '',
      mashTime: '',
      mashValue: '',
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
        this.setState({ volume: res[0].volume })
        this.setState({ boilVolume: res[0].boil_volume })
        this.setState({ fermentation: res[0].method.fermentation.temp })
        this.setState({ mashTime: res[0].method.mash_temp[0] })
        this.setState({ mashValue: res[0].method.mash_temp[0].temp })
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
        <li key={malt._id}><span>{malt.name}:</span> {malt.amount.value} {malt.amount.unit}</li>
      )
    })
    let hops = this.state.hops.map(hops => {
      return(
        <li>
          <li key={hops._id}><span>{hops.name}:</span> {hops.amount.value} {hops.amount.unit}</li>
          <ul>
            <li>Add: {hops.add}</li>
            <li>Attribute: {hops.attribute}</li>
          </ul>
        </li>
      )
    })
    return(
      <div>
        <h1>{this.state.recipe.name} <span className='tagline'>({this.state.recipe.tagline})</span></h1>
        <h3>Brewer's Tips</h3>
        <p>{this.state.recipe.brewers_tips}</p>
        <div className='container'>
          <section className='ingredients'>
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
          </section>

          <section className='process'>
            <h3>Boil Volume</h3>
            <p>{this.state.boilVolume.value} {this.state.boilVolume.unit}</p>
            <h3>Mash</h3>
            <p>Mash for {this.state.mashTime.duration} minutes at {this.state.mashValue.value}° {this.state.mashValue.unit}</p>
            <h3>Ferment</h3>
            <p>Ferment at {this.state.fermentation.value}° {this.state.fermentation.unit}</p>
            <h3>Final Volume</h3>
            <p>{this.state.volume.value} {this.state.volume.unit}</p>
          </section>
        </div>

      </div>
    )
  }
}

export default RecipePage















