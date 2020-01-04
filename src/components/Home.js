import React, { Component } from "react"; 
import './Home.css' 

class Home extends Component {
	render() {
		return(
	        <header className='openScreen'>
	          <h1 className='quote'>“Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes health.”</h1>
	          <h3 className='TJ'>-Thomas Jefferson</h3>
	        </header>
	    )
    }
}

export default Home