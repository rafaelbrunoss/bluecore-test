const mixPotions = (potions) => {
  const totalVolume = potions.map(p => p.volume).reduce((a, b) => a + b);
  const finalPotion = {
    volume: totalVolume,
    ingredients: {}
  };
  potions.forEach(potion => {
    let ingredients = Object.keys(potion.ingredients);
    ingredients.forEach(ingredient => {
      if (!finalPotion.ingredients[ingredient]) {
        finalPotion.ingredients[ingredient] = 0;
      } 
      finalPotion.ingredients[ingredient] += (potion.ingredients[ingredient] * potion.volume / totalVolume);
    })
  });
  return finalPotion;
}

const test1 = [
  {
    volume: 100,
    ingredients: {
      ingredient1: 50, 
      ingredient2: 20,
      ingredientA: 500
    }
  },
  {
    volume: 300,
    ingredients: {
      ingredient1: 150,
      ingredientA: 300,
      ingredientB: 950
    }
  }
];

console.log(mixPotions(test1));