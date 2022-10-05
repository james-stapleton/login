// const template = document.querySelector("#template")
drinkUrl = `/api/viewed`;

function displayViews(drinkUrl) {
    fetch(drinkUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const dataObject = {data: data};
        const template = Handlebars.compile(`{{#each data}}
      
            <p id = {{this.name}}>{{this.name}}: {{this.views}}</p>
           
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

displayViews(drinkUrl);

console.log("display views");