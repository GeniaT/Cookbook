// Notes:  1 lb = 1 pound = 500g, 2 pounds = 1kg = 2 lbs
// 10 g = 1 ounce (oz)
// 1mg = 0.001g
// 1 splash = 3.7ml
// 1 pinch = 357.71 mg = 0.36g
// 1 ts = 1 tsp = 1 teaspoon = 5ml
// 1 tbs = 1 tbsp = 4 ts = 20ml(AUS), 15ml(US,UK)
// 1cup = 250ml
// Source: http://www.beefandlamb.com.au/How_to/Cooking_beef_and_lamb/Tools_and_Apps/Cooking_times_and_conversion_table

var recUnitsInShopUnits = {
  cup: "250ml",
  cups: "250ml",
  splash: "3.7ml",
  splashes: "3.7ml",
  pinch: "0.36g",
  pinches: "0.36g",
  pound: "500g",
  pounds: "500g",
  lb: "500g",
  lbs: "500g",
  ts: "5ml",
  tsp: "5ml",
  teaspoon: "5ml",
  teaspoons: "5ml",
  tbs: "15ml",
  tbsp: "15ml",
  tablespoon: "15ml",
  tablespoons: "15ml"
}
var recipes = {
  recipe1: {
      name: "Lumpia",
      duration: "30mins",
      ingredients: { chicken: "300g", salt: "1pinch", tomatoes: "3", paprika: "1ts", peper:"3splash", sodium:"1/4cup"},
      kcal: "650",
      difficulty: "easy"
    },
  recipe2: {
      name: "Durum",
      duration: "45mins",
      ingredients: { beef: "200g", chicken: "150g", salt: "2pinches", peper: "1splash", tomatoes: "8", carots: "2", cheese: "8slices", sodium: "2cups"},
      kcal: "950",
      difficulty: "medium"
    },
  recipe3: {
      name: "Paki",
      duration: "45mins",
      ingredients: { goat: "200g", chicken: "150g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2",
       celeri: "3", nutella: "3tbsp", caramba: "2cup", cheese: "2slices"},
      kcal: "950",
      difficulty: "medium"
      },
  recipe4: {
      name: "tamtam",
      duration: "45mins",
      ingredients: { water: "50mls", turtle: "200g", chicken: "11g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
      kcal: "950",
      difficulty: "medium"
        },
  recipe5: {
      name: "Badoo",
      duration: "45mins",
      ingredients: { water: "100ml", bird: "200g", chicken: "150g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
      kcal: "950",
      difficulty: "medium"
        }

}

var selectedRecipes = new Array();

$(document).ready(function() {
  $( "#shopList" ).click(function() {
    $("input:checkbox[name=recipe]:checked").each(function() {
         selectedRecipes.push($(this).val());
         console.log(selectedRecipes);
    });
    fromRecToShoppingUnits();
  });
});

// Isolate quantity and units to be able to look for conversions
function fromRecToShoppingUnits() {
  const nbRecsToSum = selectedRecipes.length;
  const totalIngredients = new Object;

  for (let count = 0; count < nbRecsToSum; count++) {
    const recToRead = selectedRecipes[count];

    for (const p in recipes[recToRead].ingredients) {
      const re = /([0-9]+\.?\/?[0-9]*)\s?([a-z]+)?/ig;
      const result = re.exec(recipes[recToRead].ingredients[p]);
      let quantity = result[1];
      let unit = result[2];
      let converted;

      quantity === "1/2" ? quantity = "0.5"  : 1;
      quantity === "1/3" ? quantity = "0.33" : 1;
      quantity === "2/3" ? quantity = "0.66" : 1;
      quantity === "1/4" ? quantity = "0.25" : 1;
      quantity === "3/4" ? quantity = "0.75" : 1;
      quantity === "1/5" ? quantity = "0.2"  : 1;
      unit === undefined ? converted = quantity : 1;
      recUnitsInShopUnits[unit] === undefined ? converted = result[0] : 1;

      const re2 = /([0-9]+\.?[0-9]*)([a-z]+)/ig;
      if (recUnitsInShopUnits[unit]) {
        const result2 = re2.exec(recUnitsInShopUnits[unit]);
        let quantity2 = result2[1];
        let unit2 = result2[2];

        converted = Math.floor(quantity * quantity2 * 1000) / 1000 + unit2;
      }


      function sumIngredientsForShoppingList () {
        if (totalIngredients[p]) { //if there is such ingredient in the shopping list, add the value of the last ingredient to quantities in shopping list
          // I take the value that is already found in the shopping list (result3[0])
          const re3 = /[0-9]+\.?[0-9]*/gi;
          const result3 = re3.exec(totalIngredients[p]);
          let quantity3 = Number(result3[0]);

          // I take the value from the recent converted to be able to sum both values with the target unit
          const re4 = /([0-9]+\.?[0-9]*)([a-z]*)/gi;
          const result4 = re4.exec(converted);
          let quantity4 = Number(result4[1]);
          let unit4 = result4[2];
          totalIngredients[p] = quantity3 + quantity4 + unit4; //value from shop list + value from rec list + unit from conversion

        } else { //if there is no such ingredient in the shopping list
          totalIngredients[p] = converted;
        }
      }

      sumIngredientsForShoppingList(totalIngredients[p]);

    }
  }
console.log(totalIngredients);
}
