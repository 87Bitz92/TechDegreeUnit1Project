// FSJS - Random Quote Generator
const quotebox = document.querySelector('#quote-box');

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
        citation: 'Bay Area Post',
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
        citation: 'Her Rules',
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
    const pQuote = document.querySelector('.quote').textContent;
    const pSource = document.querySelector('.source').textContent;
    const spanCit = document.querySelector('.citation').textContent;
    const spanYear = document.querySelector('.year').textContent;

        for (let i = 0; i < rand_Q2.length; i++) {

          if (spanCit) {
            pQuote = rand_Q2.quote;
            pSource = rand_Q2.source;
            spanYear = rand_Q2.year;
            spanCit = rand_Q2.citation;

            let message = pQuote +  pSource + spanCit + spanYear;
            return message;
            } else {
              pQuote = rand_Q2.quote;
              pSource = rand_Q2.source;
              spanYear = rand_Q2.year;

                }
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
