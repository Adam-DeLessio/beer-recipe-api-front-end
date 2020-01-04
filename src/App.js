import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Recipe from './components/Recipe'
import RecipePage from './components/RecipePage'
import Home from './components/Home'
import Add from './components/Add'

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
          <Link className='add' to={'/Add'}>
            <h2>Add Recipe</h2>
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
          <Route path='/Add' component={Add} />
          <Route 
            path={'/RecipePage/:_id'}
            render={props => (
              <RecipePage
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
