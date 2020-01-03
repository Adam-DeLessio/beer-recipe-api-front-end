import React, { Component } from "react";
import './Add.css' 
import Axios from 'axios'

class Add extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			tagline: '',
			id: ''
		}
		this.newName = this.newName.bind(this)
		this.newTagLine = this.newTagLine.bind(this)
		this.newID = this.newID.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	newName(event) {
		this.setState({ name: event.target.value })
	}
	newTagLine(event) {
		this.setState({ tagline: event.target.value })
	}
	newID(event) {
		this.setState({ id: event.target.value })
	}

	onSubmit(event) {
		event.preventDefault()
		const newRecipe = {
			id: this.state.id,
			name: this.state.name,
			tagline: this.state.tagline
		}
		Axios.post('https://beer-recipe-api.herokuapp.com/Add', newRecipe).then(res => console.log(res))
	}



	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<input className='inputs' placeholder='Recipe Name' value={this.state.name} onChange={this.newName} required></input>
					<input className='inputs' placeholder='Tag Line' value={this.state.tagline} onChange={this.newTagLine} required></input>
					<input className='inputs' placeholder='ID Number' value={this.state.id} onChange={this.newID} required></input>

					<input className='inputs' placeholder='ABV'></input>
					<input className='inputs' placeholder='IBUs'></input>
					<input className='inputs' placeholder='Target Final Gravity'></input>
					<input className='inputs' placeholder='Target Original Gravity'></input>
					<input className='inputs' placeholder='EBC'></input>
					<input className='inputs' placeholder='SRM'></input>
					<input className='inputs' placeholder='PH'></input>
					<input className='inputs' placeholder='Attenuation Level'></input>
					
					<input className='inputs' placeholder='Description'></input>


					<input className='inputs' placeholder='Brewer Tips'></input>
					<input className='inputs' placeholder='Contributed By'></input>			

					<div>
						<button type='submit' className='button'>Add Recipe</button>
					</div>		
				</form>
			</div>
	    )
    }
}

export default Add