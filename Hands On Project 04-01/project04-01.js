"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

        Coded By: JLemois, IST239
        September 16, 2023
        Hands On Project04-01

        **Majority of code supplied to add a simple try/catch method
           to two calculations to verify that the input from user
           is greater than zero/non-negative. Also had to fix the error
           in the global constants by adding a decimal. added use strict at top

*/

// Global Constants
const COST_PER_LB = .50; // add decimal to correct
const COST_PER_MILE = .75; // add decimal to correct
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
//Rewrite to add in try/catch for error handling
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box

   //Try whether wgtBox is > 0 based off of statement and math supplied in textbook
   //followed syntax example from book
   try {
       if (!(wgtBox.value > 0)) throw " !! Enter a positive weight";
       totalCost += wgtBox.value * COST_PER_LB;
   } catch(err) {
       msgBox.innerHTML = err;
   }

    //Try whether distBox is > 0 based off of statement and math supplied in textbook
   try {
       if (!(distBox.value > 0)) throw "!! Enter a positive mileage";
       totalCost += distBox.value * COST_PER_MILE;
   } catch(err) {
        msgBox.innerHTML = err;
   }

   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }
   
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
