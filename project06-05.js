"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

    Coded By: Joseph Lemois, IST-239
    September 28, 2023
    Hands On Project 06-05
    Debugging challenge
    ~checked areas book said to look through
    left comments next to changes as they were made

*/

window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   // Verify that the user has selected a session to attend
   document.getElementById("regSubmit").onclick = sessionTest; // add on
   
   // Recalculate the shopping chart when any field loses the focus
   document.getElementById("fnBox").onchange = calcCart;
   document.getElementById("lnBox").onchange = calcCart;//change to onchange
   document.getElementById("groupBox").onchange = calcCart;
   document.getElementById("mailBox").onchange = calcCart;
   document.getElementById("phoneBox").onchange = calcCart;
   document.getElementById("sessionBox").onchange = calcCart;
   document.getElementById("banquetBox").onchange = calcCart;
   document.getElementById("mediaCB").onclick = calcCart;//onclick
});


// Function to verify that a session was selected by the user
function sessionTest() {
   var confSession = document.getElementById("sessionBox");
   if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package"); //add Custom
   } else {
      confSession.setCustomValidity(""); //add Custom
   }
}

// Function to calculate the shopping cart total
function calcCart() {
   
   // Calculate the banquet cost for all guests 
   let guestCost = document.forms.register.elements.banquetGuests.value*55;
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value;
   
   // Determine the cost of the selected session
   let sessionCost = 0;       // Initial cost of the session
   let sessionChoice = "";    // Initial chosen session

   // Index of the chosen session
   let selectedSession = document.getElementById("sessionBox").selectedIndex; //Add selected
   
   // Retrieve the name and cost of the selected session  
   if (selectedSession !== -1) {
      sessionChoice = document.forms.register.elements.sessionBox[selectedSession].text;
      sessionCost = document.forms.register.elements.sessionBox[selectedSession].value;
   }
   
   // Determine the cost of the media pack
   let mediaCost = 0;      // Initial media cost
   let mediaChoice = "";   // Initial media choice
   
   // If the user selects the media pack, update the choice and cost
   //change check to checked
   if (document.forms.register.elements.mediaCB.checked) {
      mediaChoice = "yes";
      mediaCost = 115;
   }
   
   // Calculate total cost of the conference
   // Multiply field values by 1 to convert them from text strings to numeric values
   let totalCost = guestCost*1 + sessionCost*1 + mediaCost*1;
   
   // Display the field values and calculated values in the Shopping Cart table
   document.getElementById("regName").textContent = document.forms.register.elements.firstName.value + " " + document.forms.register.elements.lastName.value;
   document.getElementById("regGroup").textContent = document.forms.register.elements.group.value;
   document.getElementById("regEmail").textContent = document.forms.register.elements.email.value;
   document.getElementById("regPhone").textContent = document.forms.register.elements.phoneNumber.value;
   document.getElementById("regSession").textContent = sessionChoice;
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value; 
   document.getElementById("regPack").textContent = mediaChoice;
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"}); //add { }
}
