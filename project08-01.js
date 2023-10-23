"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Coded By: Joseph Lemois, IST-239
           October, 15, 2023
           Hands On Project 8-1

           "Build object class for a countdown timer"
           ~Follow instuctions from book

*/

/*--------------- Object Code --------------------*/

//constructor creation for time per books instrucitons
function timer(min, sec) {
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

//run pause function created based off of the timer object
// if-else structure that checks for value then does countdown at a set interval of 1000
timer.prototype.runPause = function(timer, minBox, secBox) {
    if (timer.timeID) {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    } else {
        timer.timeID = window.setInterval(countdown, 1000);
    }

    // runs the countdown if it passes through the if-else checks
    //sets values of the minute and seconds box as timer is "reset"/ counts dowwn
    function countdown() {
        if (timer.seconds > 0) {
            timer.seconds--;
        } else if (timer.minutes > 0) {
            timer.seconds = 59;
            timer.minutes--;
        } else {
            window.clearInterval(timer.timeID);
            timer.timeID = null;
        }

        minBox.value = timer.minutes;
        secBox.value = timer.seconds;
    }
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//start timer object
let myTimer = new timer(minBox.value, secBox.value);

//set minutes value
minBox.onchange = function() {
    myTimer.minutes = minBox.value;
}

//set seconds value
secBox.onchange = function() {
    myTimer.seconds = secBox.value;
}

//setup pause on click
runPauseTimer.onclick = function() {
    myTimer.runPause(myTimer, minBox, secBox);
}