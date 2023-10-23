"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Converter

      Coded By: Joseph Lemois, IST-239
           September 16, 2023,
           Hands On Project04-05

           Debugging challenge
           *Code supplied by book/class

      Commented debugging changes



 */


// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   return degrees*Math.PI/180; //added Math to PI / 180
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians*180/Math.PI; //added Math to PI
}

// Event handler that converts radians to degrees when the input box is changed
   // added closing ) to function
document.getElementById("rValue").onchange = function() {
   let radians = document.getElementById("rValue").value;
   console.log("Radians = " + radians); //added per instructions
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
} //added s to radian variable at end of formatValue3 function

// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   console.log("Degrees = " + degrees) //added per instructions
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
} //added closing ) to end of formatValue3 function to close it properly





/* ================================================================= */
 // Function to display a numeric value in the format ##.### 
 function formatValue3(value) {
    return value.toFixed(3);
 }