// const template = document.querySelector("#template")
drinkUrl = `/api/usercocktails/`;

function displayRatings(drinkUrl) {
    fetch(drinkUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const dataObject = {data: data};
        const template = Handlebars.compile(`{{#each data}}
      
            <p id = {{this.name}}>{{this.name}}: {{this.Rating}}</p>
           
             {{/each}}  `);
        console.log("template: ",template);
        const filled = template(dataObject);
        console.log("Filled", filled);

        document.querySelector("#output").innerHTML = filled;
        console.log(filled);

        const drinks = document.querySelectorAll("p");
        drinks.forEach((drink) => {
            drink.addEventListener("click", function(e) {
                var targetedDrink = e.target.id;
                console.log(targetedDrink);
                let serverUrl = "/recipe/";
                serverUrl += targetedDrink;
                window.location.href = serverUrl;
            })
        } )
    })
}

displayRatings(drinkUrl);

console.log("display drinks");