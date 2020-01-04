import React, { Component } from "react";
import './Add.css' 
import Axios from 'axios'
import ReactDOM from 'react-dom'

class Add extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			tagline: '',
			maltName: '',
			maltAmount: '',
			maltUnit: '',
			maltList: []
		}
		this.newName = this.newName.bind(this)
		this.newTagLine = this.newTagLine.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.newMaltName = this.newMaltName.bind(this)
		this.newMaltAmount = this.newMaltAmount.bind(this)
		this.submitMalt = this.submitMalt.bind(this)
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
			name: this.state.name,
			tagline: this.state.tagline
		}
		Axios.post('https://beer-recipe-api.herokuapp.com/Add', newRecipe).then(res => console.log(res))

		this.setState({ name: '' })
	}

	newMaltName(event) {
		this.setState({ maltName: event.target.value })
	}
	newMaltAmount(event) {
		this.setState({ maltAmount: event.target.value })
	}
	submitMalt(event) {
		event.preventDefault()
		let newMalt = `Name: ${this.state.maltName} Amount: ${this.state.maltAmount}`
		this.setState({ maltList: [...this.state.maltList, newMalt] })

		// let createMalt = React.createElement('div', {}, this.state.maltName)
		// ReactDOM.render(createMalt, document.getElementById('addedMalt'))
		this.setState({ maltName: '' })
		this.setState({ maltAmount: '' })
	}


	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<div className='title'>
						<input className='inputs' placeholder='Recipe Name' value={this.state.name} onChange={this.newName} required/>
						<input className='inputs' placeholder='Tag Line' value={this.state.tagline} onChange={this.newTagLine} required/>
					</div>

					<div className='basicInfo'>
						<input className='inputs' placeholder='ABV'/>
						<input className='inputs' placeholder='IBUs'/>
						<input className='inputs' placeholder='Target Final Gravity'/>
						<input className='inputs' placeholder='Target Original Gravity'/>
						<input className='inputs' placeholder='EBC'/>
						<input className='inputs' placeholder='SRM'/>
						<input className='inputs' placeholder='PH'/>
						<input className='inputs' placeholder='Attenuation Level'/>
						<input className='inputs' placeholder='Total volume in liters'/>
					</div>

					<div className='ingredients'>
						<div className='malts'>
							<h3>Add Malt</h3>
							<div className='ingredientForm'>
								<h4>Name: </h4>
								<input className='ingredientInput' placeholder='Malt Name' value={this.state.maltName} onChange={this.newMaltName} />
								<h4>Amount: </h4>
								<input className='amountInput' placeholder='Amt' value={this.state.maltAmount} onChange={this.newMaltAmount} />
								<select>
									<option>kg</option>
									<option>oz</option>
									<option>g</option>
								</select>
								<button type='button' onClick={this.submitMalt} className='addIngredient'>Add</button>
							</div>
							<div id='addedMalt' className='addedMalt'>{this.state.maltList}</div>
						</div>

						<div className='hops'>
							<h3>Add Hops</h3>
							<div className='ingredientForm'>
								<h4>Name: </h4>
								<input className='ingredientInput'/>
								<h4>Amount: </h4>
								<input className='amountInput'/>
								<select>
									<option>g</option>
									<option>kg</option>
									<option>oz</option>
								</select>
								<button type='button' className='addIngredient'>Add</button>
							</div>
						</div>

					</div>

					<div className='extras'>
						<input className='inputs' placeholder='Brewer Tips'/>
						<input className='inputs' placeholder='Contributed By'/>		

						<textarea className='inputs' placeholder='Description'></textarea>
						<button type='button' className='button'>Add Recipe</button>
					</div>

				</form>
			</div>
	    )
    }
}

export default Add