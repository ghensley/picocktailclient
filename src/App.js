import React, { Component } from 'react'
import './App.css'
import cocktails from "./constants/cocktails"
import { getIngredients } from "./api"
import { canCocktailBeMade } from "./utils/mixingUtils"
import Cocktail from "./components/Cocktail"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: {}
    }
  }

  componentDidMount() {
    getIngredients().then(response => {
      this.setState({ ingredients: response.data })
    })
  }

  render() {
    const { ingredients } = this.state

    return (
      <div className="App row">
        { Object.keys(cocktails).map(cocktail => 
          canCocktailBeMade(cocktails[cocktail], Object.keys(ingredients)) ? <Cocktail name={cocktail} cocktail={cocktails[cocktail]} /> : null
        ) }
      </div>
    );
  }
}

export default App;
