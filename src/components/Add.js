import React, { Component } from "react";
import './Add.css' 

class Add extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			tagline: ''
		}
		this.newName = this.newName.bind(this)
	}
	newName(event) {
		this.setState({ name: event.target.value })
	}
	newTagLine(event) {
		this.setState({ tagline: event.target.value })
	}

	render() {
		return(
			<div>
				<form>
					<input className='inputs' placeholder='Recipe Name'></input>
					<input className='inputs' placeholder='Tag Line'></input>

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
						<button className='button'>Add Recipe</button>
					</div>		
				</form>
			</div>
	    )
    }
}

export default Add