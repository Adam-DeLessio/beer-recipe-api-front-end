import React, { Component } from "react";
// import "./RecipePage.css";
import { Link } from 'react-router-dom';


class RecipePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null
		}
	}

  componentDidMount() {
  	let id = this.props.match.params.id


    let newUrl = 'https://beer-recipe-api.herokuapp.com/id/' + id

    fetch(newUrl)
      .then(res => res.json())
      .then(res => {
      	this.setState({ name: res[0].name })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return(
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default RecipePage