// Notes:  1 lb = 1 pound = 500g, 2 pounds = 1kg = 2 lbs
// 10 g = 1 ounce (oz)
// 1mg = 0.001g
// 1 splash = 3.7ml
// 1 pinch = 357.71 mg = 0.36g
// 1 ts = 1 tsp = 1 teaspoon = 5ml
// 1 tbs = 1 tbsp = 4 ts = 20ml(AUS), 15ml(US,UK)
// 1cup = 250ml
// Source: http://www.beefandlamb.com.au/How_to/Cooking_beef_and_lamb/Tools_and_Apps/Cooking_times_and_conversion_table

var conversions = {
  cup: "250ml",
  splash: "3.7ml",
  pinch: "0.36g",
  pound: "500g",
  lb: "500g",
  ts: "5ml",
  tsp: "5ml",
  teaspoon: "5ml",
  tbs: "15ml",
  tbsp: "15ml",
  tablespoon: "15ml"
}
var recWithUnits = {
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
      ingredients: { beef: "200g", chicken: "150g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2", cheese: "8slices"},      // ingredients : {salt: "1pinch"},
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
      ingredients: { turtle: "200g", chicken: "11g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
      kcal: "950",
      difficulty: "medium"
        },
  recipe5: {
      name: "Badoo",
      duration: "45mins",
      ingredients: { bird: "200g", chicken: "150g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
      kcal: "950",
      difficulty: "medium"
        }

}

// Isolate quantity and units to be able to look for conversions
function fromRecToShoppingUnits() {
  const nrRecsToSum = Object.keys(recWithUnits).length;
  const totalIngredients = new Object;

  for (let count = 1; count < nrRecsToSum + 1; count++) {
    const recToRead = `recipe${count}`;
    for (const p in recWithUnits[recToRead].ingredients) {
      const re = /([0-9]+\.?\/?[0-9]*)\s?([a-z]+)?/ig;
      const result = re.exec(recWithUnits[recToRead].ingredients[p]);
      result[1] === "1/2" ? result[1] = "0.5" : 1;
      result[1] === "1/3" ? result[1] = "0.33" : 1;
      result[1] === "2/3" ? result[1] = "0.66" : 1;
      result[1] === "1/4" ? result[1] = "0.25" : 1;
      result[1] === "3/4" ? result[1] = "0.75" : 1;
      result[2] === undefined ? converted = result[1] : 1; //if no unit, no need to convert
      conversions[result[2]] === undefined ? converted = result[0] : 1; //if no equivalent in conversions var, we keep the initial value & unit

      // Look for the equivalent unit in conversions var and calculate its value.
      const re2 = /([0-9]+\.?[0-9]*)([a-z]+)/ig;
      if (conversions[result[2]]) {
        const resultBis = re2.exec(conversions[result[2]]);
        var converted = Math.floor((result[1] * resultBis[1])*1000)/1000 + resultBis[2]; //to avoid weird numbers like 11.10000001ml
      }


      function sumIngredientsForShoppingList() {
        if (totalIngredients[p]) { //if there is such ingredient in the shopping list, add the value of the last ingredient to quantities in shopping list
          // I take the value that is already found in the shopping list (result3[0])
          const re3 = /[0-9]+\.?[0-9]*/gi;
          const result3 = re3.exec(totalIngredients[p]);

          // I take the value from the recent converted to be able to sum both values with the target unit
          const re4 = /([0-9]+\.?[0-9]*)([a-z]*)/gi;
          const result4 = re4.exec(converted);
          totalIngredients[p] = Number(result3[0]) + Number(result4[1]) + result4[2]; //value from shop list + value from rec list + unit from conversion

        } else { //if there is no such ingredient in the shopping list
          totalIngredients[p] = converted;
        }
      }

      sumIngredientsForShoppingList();

    }
  }

console.log(totalIngredients);

}

fromRecToShoppingUnits();
