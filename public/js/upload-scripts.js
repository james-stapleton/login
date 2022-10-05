var uploadForm = document.querySelector("#upload");

function uploadFormHandler(event) {
  event.preventDefault();
  var drinkName = document.querySelector("#drinkInput").value;
  var drinkIngredients = document.querySelector("#ingredientInput").value;
  var drinkInstructions = document.querySelector("#instructionInput").value;
  const newDrink = {
    name: drinkName,
    ingredients: drinkIngredients,
    instructions: drinkInstructions,
    image: "placeholder.jpg",
  };

  createNewDrink(newDrink);
}

uploadForm.addEventListener("submit", uploadFormHandler);

function createNewDrink(newDrink) {
  const upload = JSON.stringify(newDrink);
  console.log(`body of request: ${upload}`);
  //options for our post route
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: upload,
  };

  console.log(postOptions);

  fetch("/api/cocktails", postOptions).then(() => {
    console.log("Thank you for submitting a new cocktail to our database!");
  });
}
