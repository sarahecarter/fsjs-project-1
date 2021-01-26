/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {quote: `The answers keep unfolding as your life expands, if you’re willing to see things for what they are—and what they can be.`,
   source: `Oprah Winfrey`,
   citation: `O Magazine`,
   month: 'September',
   year: 2018
  },
  {quote: `It is very important to generate a good attitude, a good heart, as much as possible. From this, happiness in both the short term and the long term for both yourself and others will come.`,
   source: `the Dalai Lama`,
   citation: `Kindness, Clarity, and Insight`,
   year: 1984
  },
  {quote: `A person's a person, no matter how small.`,
   source: `Dr. Seuss`,
   citation: `Horton Hears a Who!`,
   year: 1954
  },
  {quote: `Happiness is not a goal, it is a by-product.`,
   source: `Eleanor Roosevelt`,
   citation: `You Learn By Living`,
   year: 1960
  },
  {quote: `Optimism is the faith that leads to achievement; nothing can be done without hope.`,
   source: `Helen Keller`,
   citation: `Optimism`,
   year: 1903
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  //Get a random number from 0 to the last item in the array
  let randomNumber = Math.floor(Math.random() * quotes.length);
  //Use random number to return a random quote from array
  let randomQuote = quotes[randomNumber];
  //Return the random quote
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
  //Call the getRandomQuote function and store quote in variable
  let quoteObject = getRandomQuote();
  //Use the returned quote to build a string of HTML
  let htmlString = `<p class="quote">${quoteObject.quote}</p>
                    <p class="source">${quoteObject.source}`;
  //If quote has citation create a citation span
  if(quoteObject.citation !== undefined) {
    htmlString += `<span class="citation">${quoteObject.citation}</span>`
  } 
  //If the quote has month create a month span
  if(quoteObject.month !== undefined) {
    htmlString += `<span class="year">${quoteObject.month}</span>`;
  } 
  //If the quote has year create a year span
  if(quoteObject.year !== undefined) {
    htmlString += `<span class="year">${quoteObject.year}</span>`;
  } 
  //Close <p> tag
  htmlString += `</p>`;
  //Use that string to display a random quote in the browser
  document.getElementById('quote-box').innerHTML = htmlString; 
  //Call random color function
  getRandomColor();
  //Return HTML
  return htmlString;
  
}

/***
 * `getRandomColor` function
***/
//Idea from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

function getRandomColor() {
  //Get 3 random numbers between 0 and 255
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  //Create RGB color
  let color = `rgb(${r},${g},${b})`;
  //Set the background of the page to the color
  document.body.style.background = color;
}


//Set interval so printQuote is called every 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);