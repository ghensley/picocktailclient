import axios from "axios"

axios.defaults.baseURL = "http://172.16.0.35:3000"

export function getIngredients() {
	return axios.get('/ingredients')
}

export function make(cocktail) {
	return axios.post('/make', cocktail.ingredients)
}