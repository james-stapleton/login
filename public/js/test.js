
//increment view count
const cocktail = document.querySelector("#cocktail-name").textContent;
console.log(cocktail);
const postOptions = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch(`/api/viewed/${cocktail}`, postOptions)
.then( () => {
  console.log(`${cocktail} views incremented`);
});

// Save button

const saveButton = document.querySelector("#save");
saveButton.addEventListener("click", () => {
const userID = localStorage.getItem("user_id");
const cocktailID = document.querySelector("#grab-id").textContent;
console.log(cocktailID);
  const body = {
    userId: userID,
    cocktailId: cocktailID,
    saved: true
  }
  const upload = JSON.stringify(body);
  const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
    body: upload
}
fetch("/api/usercocktails", postOptions)
.then(() => {
    console.log("Thank you for saving a new drink!");
});
});

// rating system
// get id, drink id and rating 
//post/put *UPSERT*

const stars = document.querySelectorAll(".stars a");
const starWrapper = document.querySelector(".stars");
var starIndex;

stars.forEach((star, i) => {
  star.addEventListener("click", () => {
      star.classList.add("disabled");
      stars.forEach((s, index) => {
          if(index <= i) {
              s.classList.add("active");
          }
      })
      rating = i + 1;
      console.log(`Star ${rating} clicked`);
      setStar(rating);
      submitRating(rating);
  })
});

function setStar(i) {
  return starIndex = i;
}

function getStar() {
  return starIndex;
}

function submitRating(starIndex) {
  console.log(starIndex);

  const userID = localStorage.getItem("user_id");
  const cocktailID = document.querySelector("#grab-id").textContent;
    const body = {
      userId: userID,
      cocktailId: cocktailID,
      rating: starIndex
    }
    const upload = JSON.stringify(body);
    const postOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=UTF-8",
      },
      body: upload
  }
  fetch("/api/usercocktails", postOptions)
  .then(() => {
      console.log("Thank you for rating this drink!");
  });
  
}