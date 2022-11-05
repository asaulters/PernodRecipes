const drinks = require('../../../../../Data//drinks.json')

const submitTotalTags = (state, e) => {
    e.preventDefault();
  // Make a single array of all ingredients to search for
  const { liquors, liqueurs, mixers } = state;
  const formIngredients = [...liquors, ...liqueurs, ...mixers];

  // A filter function must return true if you want it to be
  // in the returned set, so lets loop through all possible drinks and...
  const matches = drinks.filter(drink => {
    // create a set of all ingredients in the current drink we're checking against
    const drinkIngredients = new Set([...drink.liquors, ...drink.liqueurs, ...drink.mixers])

    // loop through all the form ingredients
    for (let i of formIngredients) {
      // if the drink doesnt have the current user provided ingredients, 
      // stop looping for this drink and just return false
      if (!drinkIngredients.has(i)) return false
    }
    // if you made it through the entire list of user form ingredients, then they
    // were all in the current drink, so return true for this drink
    // which will place it in the matches array
    return true
  })

  // This just loops through the matches and returns only the names of the drinks
  console.log(matches.map(match => match.name))
}



module.exports = {
  submitTotalTags
}