// To do next:


// functions
function addSelectedRecToList(recipeName) {
  const htmlToAdd = '<div class="selectedRec_row"><div class="recipe_name">'+ recipeName +'</div><div class="delete_icon">Icon</div></div>';
  $('.choosenRecs').append(htmlToAdd);
}

function removeUnselectedRecFromList(recipeName) {
  $('.selectedRec_row:contains("' + recipeName + '")').remove();
}

// global variables
const selectedRecipes = new Array();


// EVENTS HANDLERS - expand/collapse buttons
$('.recipe').on("click", '.expand', function(e) {
  e.stopPropagation();
  $(this).attr("class","collapse");
  $(this).parent().removeClass("collapsed").addClass("expanded");
  $(this).html('<button>Collapse!</button>');
});

$('.recipe').on("click", '.collapse', function(e) {
  e.stopPropagation();
  $(this).attr("class","expand");
  $(this).parent().removeClass("expanded").addClass("collapsed");
  $(this).html('<button>Expand!</button>');
});

// EVENTS HANDLERS - recipe selections
$('.recipe').on("click", function(e) {
  const recipeId = $(this).attr('id');
  const recName = $(this).find("h2").text();

  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
    selectedRecipes.splice(selectedRecipes.indexOf(recipeId),1);
    console.log(recName);
    removeUnselectedRecFromList(recName);
  } else {
    $(this).addClass("selected");
    if (selectedRecipes.indexOf(recipeId) === -1) {
      selectedRecipes.push(recipeId);
      addSelectedRecToList(recName);
    }
  }
  const nrSelectedRecipes = $('.selected').length;
  console.log(nrSelectedRecipes);
});
