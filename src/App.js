import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Recipe from './components/Recipe'
import RecipePage from './components/RecipePage'
import Home from './components/Home'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return(
      <div className='appContainer'>
        <nav>
          <Link className='home' to={'/'}>
            <h2>Home</h2>
          </Link>
          <Link className='recipes' to={'/Recipe'}>
            <h2>Recipes</h2>
          </Link>
        </nav>

        <main className='main'>

          
          <Route path='/' exact component={Home} />
          <Route 
            path='/Recipe'
            render={props => (
              <Recipe 
                {...props} 
              />
            )} 
          />
        </main>

      </div>
    )
  }
}










export default App;
