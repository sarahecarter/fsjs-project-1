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



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);