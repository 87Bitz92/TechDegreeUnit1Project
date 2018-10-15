// FSJS - Random Quote Generator
//Select the elements needed from the DOM and place in their own variable:
const quotebox = document.querySelector('#quote-box');
const pQuote = document.querySelector('.quote');
const pSource = document.querySelector('.source');
const spanCit = document.querySelector('.citation');
const spanYear = document.querySelector('.year');
const loadQuote = document.querySelector('#loadQuote');

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
    let quoPrint = rand_Q2.quote;
    let sourPrint = rand_Q2.source;
    let yearPrint = rand_Q2.year;
    let citPrint = rand_Q2.citation;
//Create a conditional statement to check for citation and year properties
        if (citPrint && yearPrint) {
          pQuote.textContent = quoPrint;
          pSource.textContent = sourPrint;
          spanYear.textContent = yearPrint;
          spanCit.textContent = citPrint;
          let message = quoPrint + ' -' + sourPrint + ' -' + citPrint + ' -' + yearPrint;
            return message;
//If citation and year are not present, pring the following:
          } else {
              let message = quoPrint + ' -' + sourPrint + ' -' + yearPrint;
                return message
          }
  }
//Calling the function to be printed to the page
printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
