import React, { Component } from 'react';
import { make } from "../api" 

class Cocktail extends Component {

  render() {
  	const { name, cocktail } = this.props

    return (
      <div className="cocktail-card col-md-3">
        <div className="cocktail-header">
        	<span><h4>{name}</h4></span><button className="btn btn-primary cocktail-button" type="button" onClick={() => {make(cocktail)}}>Make!</button>
        </div>
        <div className="cocktail-body">
        	{ Object.keys(cocktail.ingredients).map(ingredient => {
        		return <p className="cocktail-ingredient">{ingredient} - {cocktail.ingredients[ingredient]}</p>
        	})}
        </div>
      </div>
    );
  }
}

export default Cocktail;