"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment

     Coded By: Joseph Lemois, IST-239
     September 16, 2023
     Hands On Project 04-03

     Debugging Challenge
     *Majority of code was supplied by book/class

     add strict to top of page
     Add quotes to keyup
     add let to object reference variable creation
     add let to the variable declaration in updateCount()
     remove s from variable in charCount figuring
     per instructions add try/catch/finally for the "error" display


*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
// add let to actually declare the object reference
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount); //add quotes to keyup

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value; //add let to actually create variable
   let charCount = countCharacters(commentText); //add let to actually create variable and
                                                // remove s from commentText

   //Try catch with a finally added per instructions
   try {
       if(charCount > MAX_REVIEW) throw "You have exceeded the character count limit";
   } catch(err) {
        warningBox.innerHTML = err;
   } finally {
        wordCountBox.innerHTML = charCount;
   }
}

// Removed blank space

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 