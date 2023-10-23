/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost

     Coded By: J Lemois, IST239-W01
           September 10, 2023,
           Hands-On Project 03-01

           "...Create an app that calculates the total cost of items selected from a lunch menu
               using a for loop and an if statement as part of the program code."

*/

// variable menuItems that stored info from the document element menuItems
let menuItems = document.getElementsByClassName("menuItem");

// For loop that will run through the length of menuItems
// running calcTotal for each click event
for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}

//calcTotal function to calculate cost of customer order given
//set variable of orderTotal = 0
function calcTotal() {
    let orderTotal = 0;
    for(i=0; i<5; i++){
        if(menuItems[i].checked){
            orderTotal += Number(menuItems[i].value);
        }
        document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
    }
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }