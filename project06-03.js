"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

     Coded By: Joseph Lemois, IST239
          September 28, 2023
          Hands On Project 06-03

          ~Base code supplied by class/book
           Alter to allow for info to be input for shipping
           make it so shipping can match billing at push of button
*/
//variable declaration
let useShip = document.getElementById("useShip");
//event listener for click to change info of billing to shipping
useShip.addEventListener("click", copyShippingToBilling);

//function that changes info of billing to shipping
function copyShippingToBilling() {
    if (useShip.checked) {
        document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
        document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;

        document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
        document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;

        document.getElementById("cityBill").value = document.getElementById("cityShip").value;
        document.getElementById("countryBill").value = document.getElementById("countryShip").value;

        document.getElementById("codeBill").value = document.getElementById("codeShip").value;
        document.getElementById("stateBill").value = document.getElementById("stateShip").value;
    }
}

//variable declaration
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

//for loop adding event listeners
for (let i = 0; i < fieldCount; i++) {
    formElements[i].addEventListener("invalid", showValidationError);
}

//error box function that prompts user to complete the field
function showValidationError(evt) {
    evt.preventDefault();
    errorBox.textContent = "Complete all highlighted fields";
}