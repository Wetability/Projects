// * Imports
import app from "./scripts/app.js";
import homeLink from "./scripts/components/home.js";
import mainTitle from "./scripts/components/main_title.js";

// * App
const DOMApp = app("app");

// * Created an h1 title inside the app
const DOMTitle = mainTitle("DOM: playlist");
DOMApp.appendChild(DOMTitle);

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

playList.forEach((item, index) => {
  // * Add li & class
  const DOMLi = document.createElement("li");
  DOMLi.classList = "js-playlist";

  // *Add spans inside li
  const spanAuthor = document.createElement("span");
  spanAuthor.textContent = `Author: ${item.author}`;

  const spanSong = document.createElement("span");
  spanSong.textContent = `Song: ${item.song}`;

  // * Add color to every 2 elements
  if (index % 2 === 0) DOMLi.classList.add("js-even");
  else DOMLi.classList.add("js-odd");

  // * Add all spans to li & li to app
  DOMLi.appendChild(spanAuthor);
  DOMLi.appendChild(spanSong);
  DOMApp.appendChild(DOMLi);
});

// * Created an a home link inside the app
const DOMHomeLink = homeLink("HOME PAGE");
DOMApp.appendChild(DOMHomeLink);
