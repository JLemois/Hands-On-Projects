"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Coded By: Joseph Lemois, IST239
           September 28, 2023
           Hands on Project 06-01

           ~Base code supplied by school/book
           ~add password checking and validation that it matches

           add <script> of project06-01.js deferred
*/

//declaring variables
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd"); //first password entered
let pwd2 = document.getElementById("pwd2"); //second password entered

//submit button checks that passwords are entered correctly and match
submitButton.addEventListener("click", function() {
    if(pwd.validity.patternMismatch) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } else if (pwd.value !== pwd2.value) {
        pwd2.setCustomValidity("Your passwords must match");
    } else {
        pwd.setCustomValidity("");
    }
});


