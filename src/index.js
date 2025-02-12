//Do not change //////////////////////////////////s

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

const form = document.querySelector("form");

//console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    // information for user review
    image: e.target.image.value,
    username: e.target.username.value,
    star: e.target.star.value,
    review: e.target.review.value,
  };

  renderConfirmation(formData);
});

const renderConfirmation = (formData) => {
  const imageP = document.createElement("img");
  //formData.image to get the image value
  if (formData.image === "./images/rose.png") {
    imageP.src = "./images/rose.png";
  } else if (formData.image === "./images/avatar2.png") {
    imageP.src = "./images/avatar2.png";
  } else if (formData.image === "./images/avatar1.png") {
    imageP.src = "./images/avatar1.png";
  } else {
    imageP.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; //Userimage If no image from images is added
  }
  //bug showing only last image if using in list
  //bug fixed used a else if statment loop instead of list

  document.body.appendChild(imageP);

  const usernameP = document.createElement("p");
  usernameP.textContent = formData.username;
  document.body.appendChild(usernameP);

  const starP = document.createElement("p");
  starP.textContent = formData.star;
  document.body.appendChild(starP);

  const reviewP = document.createElement("p");
  reviewP.textContent = formData.review;
  document.body.appendChild(reviewP);

  const section = document.querySelector("section");
  section.innerHTML += ""; //+= adds review after review

  section.append(imageP, usernameP, starP, reviewP);
};

/////////////////////////////////////////////////////////////////////

//1. Append the reviews to the DOM

//2. Append new reviews to the DOM from the form
