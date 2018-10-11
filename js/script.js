// FSJS - Random Quote Generator
const quotebox = document.querySelector('#quote-box');
const pQuote = document.querySelector('.quote');
const pSource = document.querySelector('.source');
const spanCit = document.querySelector('.citation');
const spanYear = document.querySelector('.year');
// Create the array of quote objects and name it quotes
var quotes = [

    {

        quote: 'I love bread',
        source: 'Tina Lowhand',
        citation: 'Washington Post',
        year: 1944
    },

    {

        quote: 'Dogs are awesome',
        source: 'Kanye West',

        year: 1254
    },

    {

        quote: 'Men are horrible at dog walking',
        source: 'Miranda Sings',
        citation: 'Dog Walkers International',
        year: 1978
    },

    {

        quote: 'Donuts are gross!',
        source: 'My Mom',

        year: 1987
    },

    {

        quote: 'Life is like a box of chocolates.',
        source: 'My Daddy',
        citation: 'The Daily Mail',
        year: 2003

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

    let rand_Q2 = getRandomQuote();
    let quoPrint = rand_Q2.quote;
    let sourPrint = rand_Q2.source;
    let yearPrint = rand_Q2.year;
    let citPrint = rand_Q2.citation;

        if (citPrint) {
            let message = quoPrint + ' -' + sourPrint + ' -' + citPrint + ' -' + yearPrint;
            return message;
          } else {
            let message = quoPrint + ' -' + sourPrint + ' -' + yearPrint;
            return message
          }

  }

console.log(printQuote());


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//pQuote.textContent = rand_Q2.quote.value;
//pSource.textContent = rand_Q2.source.value;
//spanYear.textContent = rand_Q2.year.value;
//spanCit.textContent = rand_Q2.citation.value;
