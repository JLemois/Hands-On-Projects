"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Coded By: Joseph Lemois, IST239-W01
      September 24, 2023,
      Hands On Project05-01

      **Initial code setup provided by class/book

      ~Create a practice quiz for an Algebra class
       Implement a timer/countdown
       check whether answers entered are correct or not

       ~~If/else nested in if/elses to check for answers
          as well as keep check of the answers as well
          as keeping up with timer printout
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

//Start the countdown function with timer based off of the "showquiz" class of the HTML document
startQuiz.onclick = function() {
    overlay.className = "showquiz";
    timeID = setInterval(countdown, 1000);
}

//Countdown function that checks timer then spits out your correct or not answers
function countdown() {
    if(timeLeft === 0) {
        //this if is when timer hits zero
        clearInterval(timeID)
        let totalCorrect = checkAnswers();
        if (totalCorrect === correctAnswers.length) {
            //this if is within the timer above and checks if at 100%
            window.alert("Congratulations on 100%!");
        }
        else {
            //this else is if you didnt get 100%
            //returns what you got right
            window.alert("You got " + totalCorrect + " correct out of " + correctAnswers.length);
            timeLeft = quizTime;
            quizClock.value = quizTime;
            overlay.className = "hidequiz";
        }
    }
    else
    {
        //maintains the timer
        timeLeft--;
        quizClock.value = timeLeft;
    }
}



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

