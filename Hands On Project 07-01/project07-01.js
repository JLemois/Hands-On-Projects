"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

     Coded By: JLemois, IST-239
          October 7, 2023
          Hands On Project 7-1

          ~Base code supplied from text/zip file

          "In this project you will use regular expressions to
           verify and validate a password before its accepted"
           -Password must have:
             --at least 8 characters long
             --have at least one uppercase letter
             --have at least one digit
             --have one of the following symbols
               --  ! #  $ %

     Follow given instructions from book to accomplish the above goals

*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   //added per instructions to prevent button use till regex tests are satisfied
   e.preventDefault();

   //setup regex (regular expressions) to be used for validation
   let regex1 = /[A-Z]/;
   let regex2 = /\d/;
   let regex3 = /[\!\$\#\%]/;

   //test through the regex created above to test the password
   //remember to test whether the value is false; add !
   //return the statement if all fields are met
   if (pwd.length < 8) {
       feedback.textContent = "Your password must be at least 8 characters.";
       } else if (!regex1.test(pwd)) {
           feedback.textContent = "Your password must include an upper case letter.";
            } else if (!regex2.test(pwd)) {
                feedback.textContent = "Your password must include a number.";
                } else if (!regex3.test(pwd)) {
                    feedback.textContent = "Your password must include one of the following symbols: '! # $ %'.";
                    }
                        else {
                            signupForm.submit();
                        }
});
