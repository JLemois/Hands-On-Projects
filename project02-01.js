/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

       In this project we will take input from the user (numbers) and it will convert
             from Celsius to Fahrenheit or from Fahrenheit to Celsius

      Celsius <-> Fahrenheit Converter

      Coded By: Joseph Lemois, IST239-W01
            September 2, 2023

            Hands-on Project 2-1
            ~~Following prompts from book

         Create functions for conversions of Celsius and Fahrenheit
          to be called in the HTML page project02-01

         **For reference:
                  Celsius = (Fahrenheit - 32)/1.8
                  Fahrenheit = Celsius X 1.8 + 32

 */

// Fahrenheit Conversion Function using reference from top comment section
function FahrenheitToCelsius(degree) {
   return (degree - 32) / 1.8;
}

//  Celsius Conversion Function using reference from top comment section
function CelsiusToFahrenheit(degree) {
    return degree * 1.8 + 32;
}

// Event listener for the FahrenheitToCelsius function to get user input
document.getElementById("cValue").onchange = function(){
    //cDegree variable create for usage of the ID value of cValue
    let cDegree = document.getElementById("cValue").value;
    document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
    }

// Event listener for the CelsiusToFahrenheit function to get user input
document.getElementById("fValue").onchange = function(){
    //fValue variable created for usage of the id value of fValue
    let fDegree = document.getElementById("fValue").value;
    document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
    }