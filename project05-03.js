"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

     Coded By: Joseph Lemois, IST239-W01
           September 24, 2023
           Hands On Project 05-03

           Borrow initial description from book
           ~...Explore more about the properties and uses of nodes.~

           followed instructions from book

*/

//variable setup based off of book
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

//function to test value of n.nodeName
//for statement provided by book
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
    //if statement initiated from book
    //checks nodes name and if correct adds in the added code
    if (n.nodeName === heading) {

        //create list of amendments
        let anchor = document.createElement("a");
        anchor.name = "doclink" + headingCount;
        n.insertBefore(anchor, n.firstElementChild);


        //create list of titles of amendments
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        listItem.appendChild(link);

        //creates links from list of titles to the list of amendments
        link.textContent = n.textContent;
        link.href = "#doclink" + headingCount;
        //error in instructions

        toc.appendChild(listItem);

        headingCount++;
    }
}