// FSJS - Random Quote Generator
//Select the elements needed from the DOM and place in their own variable:
const quotebox = document.querySelector('#quote-box');
const pQuote = document.querySelector('.quote');
const pSource = document.querySelector('.source');
const spanCit = document.querySelector('.citation');
const spanYear = document.querySelector('.year');
const loadQuote = document.querySelector('#loadQuote');
const body = document.querySelector('.body');

//let interval = window.setInterval(
// Create the array of quote objects and name it quotes

var quotes = [
    {
        quote: 'I am not afraid of storms for I am learning how to sail my ship.',
        source: 'Amy March',
        citation: 'Little Women',
        year: 1869
    },
    {
        quote: 'To love oneself is the beginning of a lifelong romance.',
        source: 'Oscar Wilde',
        citation: 'An Ideal Husband',
        year: 1893
    },
    {
        quote: 'You learn how to cut down trees by cutting them down',
        source: 'Bateke people',
    },
    {
        quote: 'The wealth which enslaves the owner isn’t wealth',
        source: 'Yoruba people',
    },
    {
        quote: 'It is in our darkest moments, that we must focus to see the light.',
        source: 'Aristotle Onassis',
    }
  ]



  loadQuote.addEventListener("click", function (event){
    printQuote();
    getRandomColor();
  });
// Create the getRandomQuuote function and name it getRandomQuote
//***return a randomly selected quote

function getRandomQuote(array) {
    let randQuote = Math.floor(Math.random() * (quotes.length));
    let rand_quote = quotes[randQuote];
    return rand_quote;
  };
// Create the printQuote funtion and name it printQuote



function printQuote () {

//I called the getRandomQuote function first then put it in a variable
    let rand_Q2 = getRandomQuote();
//Grab the property values I want and place in their own variable to be used late.
//Create a conditional statement to check for citation and year properties
    let message;
      if (rand_Q2.citation && rand_Q2.year) {
          let message = '<p class="quote">' +  rand_Q2.quote + '</p>'
          + '<p class="source">' +  rand_Q2.source + '<span class="citation">' +  rand_Q2.citation + '</span>' +
          '<span class="year">' +  rand_Q2.year + '</span>' +
          '</p>';
        quotebox.innerHTML = message;
      } else {
        let message = '<p class="quote">' +  rand_Q2.quote + '</p>'
        + '<p class="source">' +  rand_Q2.source + '</p>';
        quotebox.innerHTML = message;
      }
//Random Color Generator - Placed the function inside the printOuote function
      function getRandomColor () {
          let rand_color = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
          let newArrCol = [];
                  for (let i = 0; i < 6; i++) {
                  let rand_col = Math.floor(Math.random() * rand_color.length);
                  let newNum = rand_color[rand_col];
                  newArrCol.push(newNum);
                  };
                return newArrCol;
        };
        let new_Arr = getRandomColor();
        let message1 = '#' + new_Arr[0] + new_Arr[1] + new_Arr[2] + new_Arr[3] + new_Arr[4] + new_Arr[5];
        body.style.backgroundColor = message1;
        loadQuote.style.backgroundColor = message1;

  };
//Calling the function to be printed to the page
printQuote();
let setInterval = document.setInterval(printOuote, 20*1000);
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


//loadQuote.addEventListener("click", printQuote, false);






























//****
