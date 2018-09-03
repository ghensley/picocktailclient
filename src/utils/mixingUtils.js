export function canCocktailBeMade(cocktail, ingredientsWeHave) {
	const ingredientsInCocktail = Object.keys(cocktail.ingredients)
	for (let i = 0; i < ingredientsInCocktail.length; i++) {
		if (ingredientsWeHave.indexOf(ingredientsInCocktail[i]) < 0) {
			return false
		}
	}
	return true
}