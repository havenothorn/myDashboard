const quotes = [
  {
    quote:
      "The only way to deal with life's challenges is to meet them head-on with strength and determination.",
    author: "- Dorothy Height",
  },
  {
    quote:
      "We must reject not only the stereotypes that others hold of us but also the stereotypes that we hold of ourselves.",
    author: "- Shirley Chisholm",
  },
  {
    quote:
      "The question isn't who's going to let me; it's who's going to stop me.",
    author: "- Ayn Rand",
  },
  {
    quote: "I do not wish women to have power over men, but over themselves.",
    author: "- Mary Wollstonecraft",
  },
  {
    quote:
      "You have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "- Harriet Tubman",
  },
  {
    quote:
      "Do not bring people in your life who weigh you down. And trust your instincts – good relationships feel good. They feel right. They don’t hurt.",
    author: "- Oprah Winfrey",
  },
  {
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "- Alice Walker",
  },
  {
    quote:
      "I am not free while any woman is unfree, even when her shackles are very different from my own.",
    author: "- Audre Lorde",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "- Simone de Beauvoir",
  },
  {
    quote: "Well-behaved women seldom make history.",
    author: "- Laurel Thatcher Ulrich",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
