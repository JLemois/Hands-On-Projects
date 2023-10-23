"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

    Coded By: Joseph Lemois, IST239
        October 15, 2023
        Hands-on Project8-3
        "...create objects to describe the contents of a pizza
         and the contents of a shopping cart"
         ~code supplied by class/book

         follow instructions from book
*/

/*---------------- Object Code ----------------------*/

//set object cart to empty array of items
let cart = {
    items: [],
    addItem: function(foodItem) {
        this.items.push(foodItem);
    }
};

//allow for pizzas size and crust to be chosen
//sets toppings to an empty array
function Pizza(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
};

//sets Toppings to get the name and which side
function Toppings() {
    this.name = "";
    this.side = "";
}

//adds toppings to the toppings array
Pizza.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
}

//adds the pizza to the cart array
Pizza.prototype.addToCart = function(cart) {
    cart.items.push(this);
}

//creates text string that "summarizes" whats been chosen by the user
Pizza.prototype.summarize = function() {
    let summary = "Pizza: " + this.size + " " + this.crust;
    for (let i = 0; i < this.toppings.length; i++) {
        summary += " " + this.toppings[i].name + " (" +this.toppings[i].side +")";
    }
    return summary;
};

/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}

// Function to build the pizza
// declares a new Pizza and then sets toppings to it that user has selected
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 
    let myPizza = new Pizza();
    myPizza.size = pizzaSizeBox.value;
    myPizza.crust = pizzaCrustBox.value;

    for (let i = 0; i<checkedToppings.length; i++) {
        let myTopping = new Toppings();
        myTopping.name = checkedToppings[i].name;
        myTopping.side = checkedToppings[i].value;
        myPizza.addTopping(myTopping);
    }
    return myPizza;
}    

// Function to add the built pizza to the shopping cart
function updateCart() {
    let myPizza = buildPizza();
    cart.addItem(myPizza);

    //for debugging purposes
    console.log(cart);

    //displays the summary in paragraph form of what the user has chosen
    let summaryParagraph = document.createElement("p");
    summaryParagraph.textContent = myPizza.summarize();
    cartBox.appendChild(summaryParagraph);

    //clears the pizza and allows for reset for user
    clearPizzaImage();
    clearToppings();
}  
