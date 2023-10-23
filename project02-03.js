/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Coded By: Joseph Lemois, IST239-W01
            September 3, 2023
            Hands-On Project: 02-03

      Create mouse over events for the shapes on the page
       that was pre made for this assignment
 */


/*
  Mouse over event for the square
  This will show text refering to the square in respective space
  then remove the text upon no longer hovering over square
  */
document.getElementById("square").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You\'re hovering over a square.";
   document.getElementById("square").onmouseout = function(){
       document.getElementById("feedback").innerHTML = " ";}}

/*
    Mouse over event for the triangle
    This will show text referring to the triangle in respective space
    then remove the text upon no longer hovering over triangle
*/
document.getElementById("triangle").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You\'re hovering over a triangle.";
   document.getElementById("triangle").onmouseout = function(){
       document.getElementById("feedback").innerHTML = " ";}}

/*
    Mouse over event for the circle
    This will show text referring to the circle in respective space
    then remove the text upon no longer hovering over circle
*/
document.getElementById("circle").onmouseover = function() {
    document.getElementById("feedback").innerHTML = "You\'re hovering over a circle.";
    document.getElementById("circle").onmouseout = function() {
        document.getElementById("feedback").innerHTML = " ";}}