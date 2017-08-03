// To do next:

// global variables
const recUnitsInShopUnits = {
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
const recipes = {
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
      name: "Rampooom",
      duration: "45mins",
      ingredients: { water: "50mls", turtle: "200g", chicken: "11g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
      kcal: "950",
      difficulty: "medium"
        },
  recipe6: {
      name: "tamtam",
      duration: "45mins",
      ingredients: { water: "50mls", turtle: "200g", chicken: "11g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
      kcal: "950",
      difficulty: "medium"
        },
  recipe7: {
      name: "Badoo",
      duration: "45mins",
      ingredients: { water: "100ml", bird: "200g", chicken: "150g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
      kcal: "950",
      difficulty: "medium"
        }

}
const selectedRecipes = new Array();
let objToShopList = new Object;

// functions
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
  objToShopList = totalIngredients;
  console.log(totalIngredients);
}

function addSelectedRecToList(recipeName) {
  const htmlToAdd = '<div class="selectedRec_row"><div class="recipe_name">'+ recipeName +'</div><div class="delete_icon">Icon</div></div>';
  $('.choosenRecs').append(htmlToAdd);
}

function removeUnselectedRecFromList(recipeName) {
  $('.selectedRec_row:contains("' + recipeName + '")').remove();
}


// EVENTS HANDLERS - expand/collapse buttons
$('.recipe').on("click", '.expand', function(e) {
  e.stopPropagation();
  $(this).removeClass("expand").addClass("collapse");
  $(this).parent().removeClass("collapsed").addClass("expanded");
  $(this).html('<button>Collapse!</button>');
});

$('.recipe').on("click", '.collapse', function(e) {
  e.stopPropagation();
  $(this).removeClass("collapse").addClass("expand");
  $(this).parent().removeClass("expanded").addClass("collapsed");
  $(this).html('<button>Expand!</button>');
});

$('#create_update').on("click", function() {
  if (selectedRecipes.length === 0) {
    console.log("please select a recipe");
  } else {
    fromRecToShoppingUnits();
    for (const ingredient in objToShopList) {
      const htmlToAdd = '<div class="ingredients_row"><div class="ingredient_name">' + ingredient +
      '</div><div class="ingredient_quantity">' + objToShopList[ingredient] + '</div></div>';
      $('.shopping_ingredients').append(htmlToAdd);
    }
  }
});

// EVENTS HANDLERS - recipes selection
$('.recipe').on("click", function(e) {
  const recipeId = $(this).attr('id');
  const recName = $(this).find("h2").text();

  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
    selectedRecipes.splice(selectedRecipes.indexOf(recipeId),1);
    removeUnselectedRecFromList(recName);
  } else {
    $(this).addClass("selected");
    if (selectedRecipes.indexOf(recipeId) === -1) {
      selectedRecipes.push(recipeId);
      addSelectedRecToList(recName);
    }
  }
  // console.log(selectedRecipes);
});
