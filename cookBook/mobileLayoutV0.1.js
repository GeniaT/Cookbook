// global variables
const recUnitsInShopUnits = {
  cup: "250ml",
  cups: "250ml",
  c: "250ml",
  oz: "30ml",
  ounce: "30ml",
  ounces: "30ml",
  splash: "3.7ml",
  splashes: "3.7ml",
  pinch: "0.36g",
  pinches: "0.36g",
  pint: "500ml",
  pints: "500ml",
  pt: "500ml",
  pts: "500ml",
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
  // 7 recipes for test purpose:
  // recipe1: {
  //     name: "Lumpia",
  //     duration: "30mins",
  //     ingredients: { chicken: "300g", salt: "1pinch", tomatoes: "3", paprika: "1ts", peper:"3splash", sodium:"1/4cup"},
  //     kcal: "650",
  //     difficulty: "easy"
  //   },
  // recipe2: {
  //     name: "Durum",
  //     duration: "45mins",
  //     ingredients: { beef: "200g", chicken: "150g", salt: "2pinches", peper: "1splash", tomatoes: "8", carots: "2", cheese: "8slices", sodium: "2cups"},
  //     kcal: "950",
  //     difficulty: "medium"
  //   },
  // recipe3: {
  //     name: "Paki",
  //     duration: "45mins",
  //     ingredients: { goat: "200g", chicken: "150g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2",
  //      celeri: "3", nutella: "3tbsp", caramba: "2cup", cheese: "2slices"},
  //     kcal: "950",
  //     difficulty: "medium"
  //     },
  // recipe4: {
  //     name: "tamtam",
  //     duration: "45mins",
  //     ingredients: { water: "50mls", turtle: "200g", chicken: "11g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
  //     kcal: "950",
  //     difficulty: "medium"
  //       },
  // recipe5: {
  //     name: "Rampooom",
  //     duration: "45mins",
  //     ingredients: { water: "50mls", turtle: "200g", chicken: "11g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
  //     kcal: "950",
  //     difficulty: "medium"
  //       },
  // recipe6: {
  //     name: "tamtam",
  //     duration: "45mins",
  //     ingredients: { water: "50mls", turtle: "200g", chicken: "11g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
  //     kcal: "950",
  //     difficulty: "medium"
  //       },
  // recipe7: {
  //     name: "Badoo",
  //     duration: "45mins",
  //     ingredients: { water: "100ml", bird: "200g", chicken: "150g", salt: "2pinch", peper: "1splash", tomatoes: "8", carots: "2"},
  //     kcal: "950",
  //     difficulty: "medium"
  //       }
  recipe1: {
      name: "Baked Alaska",
      duration: "45mins",
      ingredients: { "lemon sorbet": "1/2 c", "ladyfinger cookies": "8", "rippled ice cream or gelato": "3 pt", "large egg whites": "6", "granulated sugar":"3/2 c", blowtorch:"1"},
      kcal: "650",
      difficulty: "easy"
    },
  recipe2: {
      name: "Chocolate Cupcakes",
      duration: "55mins",
      ingredients: { "sticks butter": "2", sugar: "3/2 c.", "unsweetened cocoa powder": "2/3 c", "baking powder": "1 tsp", "baking soda": "1/2 tsp", salt: "1/4 tsp", eggs: "2", milk: "1 c", "vanilla extract": "2 tsp", "all-purpose flour": "5/2 c", "heavy cream": "3/4 c", "bittersweet chocolate": "8 oz", "white chocolate": "3 oz"},
      kcal: "950",
      difficulty: "medium"
    },
  recipe3: {
      name: "Bailey's Cheesecake",
      duration: "7:25hours",
      ingredients: {"melted butter": "4 tbsp", "Oreo cookies": "26", "Kosher salt": "1 pinch", "cream cheese bars": "32 oz", "sugar": "3/2 c", "cornstarch": "1/4 c", "eggs": "4", "Baileys Irish Cream": "2/3 c", "pure vanilla extract": "1 tsp", "heavy cream": "2/3 c", "semisweet chocolate chips":"2 c" },
      kcal: "950",
      difficulty: "medium"
      },
  recipe4: {
      name: "Key Lime Cakes",
      duration: "3:35hours",
      ingredients: { "regular limes": "2", "cream cheese": "4 oz", "sweetened condensed milk": "1/2 c", "heavy cream": "1 c", "thin gingersnap cookies": "60"},
      kcal: "950",
      difficulty: "medium"
        },
  recipe5: {
      name: "Patriotic Ice Pops",
      duration: "15mins",
      ingredients: {blueberries: "1 pint", "vanilla ice cream": "1/4", "red raspberry sorbet": "2 pints", "Star sprinkles": "1", "large wooden craft sticks": "10"},
      kcal: "950",
      difficulty: "medium"
        },
  recipe6: {
      name: "Potato Doughnuts",
      duration: "60mins",
      ingredients: {"all-purpose flour": "4 c", "kosher salt": "1 tbsp", "baking powder": "1 tbsp", "ground nutmeg": "1 tsp", "large oranges": "2", "whole milk": "1/4 c", "unsalted butter": "1/4 c", "instant mashed potato flakes": "2/3 c", "eggs": "3", "sugar": "4/3 c", "pure vanilla extract": "1 tsp", "oil": "1", "flour":"1", "orange": "1 tbsp"},
      kcal: "950",
      difficulty: "medium"
        },
  recipe7: {
      name: "Nutella Crepe Cake",
      duration: "75mins",
      ingredients: {butter: "6 tablespoons", "eggs": "4", "milk": "3/2 cups", "pumpkin puree": "3/4 cup", "all-purpose flour": "2 cups", "vanilla extract": "2 teaspoons", "cinnamon": "1 teaspoon", "salt": "1/2 teaspoons", "water": "1 cup", "nutella": "1 cup", "heavy whipping cream":"1 cup", "pure vanilla extract": "1 teaspoon", "pepitas toasted": "1/3 cup", "granulated sugar": "1 cup", "unsalted butter": "1 cup", "full fat canned coconut milk": "2/3 cup", "bourbon": "2 tablespoons", "flaky sea salt": "2/3 cup", "medjoor dates": "12 ounces", "dark chocolate": "6 ounces", "baking soda": "1 teaspoon", "baking powder": "2 teaspoons", "unsalted butter softened": "8 tablespoons", "brown sugarent": "1/2 cup", "eggs": "3", "flour": "3/2 cups"},
      kcal: "950",
      difficulty: "medium"
        }

}
let selectedRecipes = new Array();
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

      if (quantity.indexOf("/") !== -1) {
        quantity = quantity[0] / quantity[2];
      }
      unit === undefined ? converted = quantity : 1;
      recUnitsInShopUnits[unit] === undefined ? converted = result[0] : 1;

      const re2 = /([0-9]+\.?[0-9]*)([a-z]+)/ig;
      if (recUnitsInShopUnits[unit]) {
        const result2 = re2.exec(recUnitsInShopUnits[unit]);
        let quantity2 = result2[1];
        let unit2 = result2[2];

        converted = Math.floor(quantity * quantity2 * 1000) / 1000 + unit2;
        // console.log(converted);
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
          totalIngredients[p] = Math.floor((quantity3 + quantity4)*1000) / 1000 + unit4; //value from shop list + value from rec list + unit from conversion
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
  const htmlToAdd = '<div class="selectedRec_row"><div class="recipe_name">'+
   recipeName +'</div><i class="delete_icon fa fa-times fa-lg" aria-hidden="true"></i></div>';
  $('.choosenRecs').append(htmlToAdd);
}

function removeUnselectedRecFromList(recipeName) {
  $('.selectedRec_row:contains("' + recipeName + '")').remove();
}

function resetShoppingList() {
  objToShopList = {};
  $('.shopping_ingredients').html("");
}

function shopListHTML_update() {
  let time = 50;
  for (const ingredient in objToShopList) {
    setTimeout(function() {
      const htmlToAdd = '<div class="ingredients_row"><div class="ingredient_name">' + ingredient +
      '</div><div class="ingredient_quantity">' + objToShopList[ingredient] + '</div></div>';
      $('.shopping_ingredients').append(htmlToAdd);

    }, time+=50);
  }
}

// EVENTS HANDLERS - expand/collapse buttons
$('.recipe').on("click", '.expand', function(e) {
  //one recipe is expanded at a time:
  $('.recipe .collapse').removeClass("collapse").addClass("expand")
    .html('<button><i class="fa fa-expand fa-lg" aria-hidden="true"></i> Expand</button>');
  $('.recipe.expanded').removeClass("expanded").addClass("collapsed");

  e.stopPropagation();
  $(this).removeClass("expand").addClass("collapse");
  $(this).parent().removeClass("collapsed").addClass("expanded");
  $(this).html('<button><i class="fa fa-compress fa-lg" aria-hidden="true"></i> Collapse</button>');
});

$('.recipe').on("click", '.collapse', function(e) {
  e.stopPropagation();
  $(this).removeClass("collapse").addClass("expand");
  $(this).parent().removeClass("expanded").addClass("collapsed");
  $(this).html('<button><i class="fa fa-expand fa-lg" aria-hidden="true"></i> Expand</button>');
});

$('.choosenRecs').on("click", '.delete_icon', function() {
  const recName = $(this).parent().find(".recipe_name").text();
  const recId = $('.recName:contains("' + recName + '")').parent().attr('id');

  $(this).closest('.selectedRec_row').remove();
  $('.recName:contains("' + recName + '")').parent().removeClass("selected");
  selectedRecipes.splice(selectedRecipes.indexOf(recId),1);

  if ($('.ingredient_name').text() !== "") {
    resetShoppingList();
    fromRecToShoppingUnits();
    shopListHTML_update();
  }
});

$('#create_update').on("click", function() {
  if (selectedRecipes.length === 0) {
    console.log("please select a recipe");
    resetShoppingList();
  } else {
    if ($('.ingredient_name').text() !== "") {
      resetShoppingList();
    }
    fromRecToShoppingUnits();
    shopListHTML_update();
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
