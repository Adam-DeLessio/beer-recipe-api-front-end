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
			tagline: this.state.tagline,
			ingredients: {
				malt: [
					this.state.maltList
				]
			}
		}
		Axios.post('https://beer-recipe-api.herokuapp.com/Add', newRecipe).then(res => console.log(res))

		this.setState({ name: '' })
		this.setState({ tagline: '' })
		this.setState({ maltName: '' })
		this.setState({ maltAmount: ''})
		this.setState({ maltUnit: '' })
		this.setState({ maltList: [] })
	}

	newMaltName(event) {
		this.setState({ maltName: event.target.value })
	}
	newMaltAmount(event) {
		this.setState({ maltAmount: event.target.value })
	}
	submitMalt(event) {
		event.preventDefault()
		let newMalt = `${this.state.maltName} ${this.state.maltAmount}`
		this.setState({ maltList: [...this.state.maltList, newMalt] })
		this.setState({ maltName: '' })
		this.setState({ maltAmount: '' })

	}


	render() {
		let maltArray = this.state.maltList.map(malt => {
			return(
				<p>{malt}</p>
			)
		})
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<div className='title'>
						<input className='titleInputs' placeholder='Recipe Name' value={this.state.name} onChange={this.newName} required/>
						<input className='titleInputs' placeholder='Tag Line' value={this.state.tagline} onChange={this.newTagLine} required/>
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
								<input className='ingredientInput' placeholder='Malt Name' value={this.state.maltName} onChange={this.newMaltName} required/>
								<h4>Amount: </h4>
								<input className='amountInput' placeholder='Amt' value={this.state.maltAmount} onChange={this.newMaltAmount} required />
								<select>
									<option>kg</option>
									<option>oz</option>
									<option>g</option>
								</select>
								<button type='button' onClick={this.submitMalt} className='addIngredient'>Add</button>
							</div>
							<div id='addedMalt' className='addedMalt'>{maltArray}</div>
						</div>

						<div className='hops'>
							<h3>Add Hops</h3>
							<div className='ingredientForm'>
								<h4>Name: </h4>
								<input className='ingredientInput' placeholder='Hops Name' />
								<h4>Amount: </h4>
								<input className='amountInput' placeholder='Amt' />
								<select>
									<option>g</option>
									<option>kg</option>
									<option>oz</option>
								</select>
								<button type='button' className='addIngredient'>Add</button>
							</div>
						</div>

						<div className='yeast'>
							<h3>Add Yeast</h3>
							<input className='ingredientInput' placeholder='Yeast' />
						</div>

					</div>

					<div className='extras'>
						<textarea className='textarea' placeholder='Brewer Tips'></textarea>
						<textarea className='textarea' placeholder='Description'></textarea>
							
					</div>

					<input className='contributed' placeholder='Contributed By'/>

					<div>
						
						<button type='submit' className='button'>Add Recipe</button>
					</div>

				</form>
			</div>
	    )
    }
}

export default Add