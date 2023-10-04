"use strict";
// Books init

const bookArr = new Array(
  {
    name: "Chain Gang All Stars",
    author: "Nana Kwame Adjei-Brenyah",
    url: "fictionimg/img1.webp",
    price: 4.7,
    type: "fiction",
  },
  {
    name: "Where there was Fire",
    author: "John Manuel Arias",
    url: "fictionimg/img2.webp",
    price: 21.22,
    type: "fiction",
  },
  {
    name: "In Memoriam",
    author: "Alice Winn",
    url: "fictionimg/img3.webp",
    price: 8.99,
    type: "fiction",
  },
  {
    name: "The East Indian",
    author: "Brindan Charry",
    url: "fictionimg/img4.webp",
    price: 12.22,
    type: "fiction",
  },
  {
    name: "Open Throat",
    author: "Henry Hoke",
    url: "fictionimg/img5.webp",
    price: 12.81,
    type: "fiction",
  },

  {
    name: "The Berry Pickers",
    author: "Amanda Peters",
    url: "fictionimg/img6.webp",
    price: 7.97,
    type: "fiction",
  },
  {
    name: "Iron Flame",
    author: "Rebecca Yarros",
    url: "fictionimg/img7.webp",
    price: 4.89,
    type: "fiction",
  },
  {
    name: "Rouge",
    author: "Mona Awad",
    url: "fictionimg/img8.webp",
    price: 7.45,
    type: "fiction",
  },
  {
    name: "The Hacienda",
    author: "Isabel Canas",
    url: "fictionimg/img9.webp",
    price: 3.95,
    type: "fiction",
  },
  {
    name: "The Rabbit Hutch",
    author: "Tess Gunty",
    url: "fictionimg/img10.webp",
    price: 7.11,
    type: "fiction",
  },

  {
    name: "Atomic Habits",
    author: "James Clear",
    url: "psychologyimg/img1.webp",
    price: 11.9,
    type: "psychology",
  },
  {
    name: "The Body Keeps the Score:Brain, Mind, and Body in the Healig of Trauma",
    author: "Bessel van der Kolk",
    url: "psychologyimg/img2.webp",
    price: 3.63,
    type: "psychology",
  },
  {
    name: "Unmasking Autism",
    author: "Denvon Price",
    url: "psychologyimg/img3.webp",
    price: 2.76,
    type: "psychology",
  },
  {
    name: "Locked up Inside: The Mind of a Convict",
    author: "Dr. Maria A.Jones",
    url: "psychologyimg/img4.webp",
    price: 4.77,
    type: "psychology",
  },
  {
    name: "Fires in the Dark: Healing",
    author: "Kay Refield Jamison",
    url: "psychologyimg/img5.webp",
    price: 1.23,
    type: "psychology",
  },
  {
    name: "Seeing the Mind",
    author: "Lorem Ipsum",
    url: "psychologyimg/img6.webp",
    price: 9.86,
    type: "psychology",
  },
  {
    name: "The Empathy Effect",
    author: "Helen Riess MD",
    url: "psychologyimg/img7.webp",
    price: 6.38,
    type: "psychology",
  },
  {
    name: "An Immense World",
    author: "Ed Yng",
    url: "psychologyimg/img8.webp",
    price: 5.19,
    type: "psychology",
  },
  {
    name: "Misbelief",
    author: "Dan Ariely",
    url: "psychologyimg/img9.webp",
    price: 6.01,
    type: "psychology",
  },
  {
    name: "While you were out",
    author: "Ipsum Lorem",
    url: "psychologyimg/img10.webp",
    price: 9.99,
    type: "psychology",
  },

  {
    name: "Dead Eleven",
    author: "Jimmy Juliano",
    url: "horrorimg/img1.webp",
    price: 8.88,
    type: "horror",
  },
  {
    name: "The Auctioneer",
    author: "Joan Samson",
    url: "horrorimg/img2.webp",
    price: 3.18,
    type: "horror",
  },
  {
    name: "Hidden Pictures",
    author: "Jason Rekulak",
    url: "horrorimg/img3.webp",
    price: 12.41,
    type: "horror",
  },
  {
    name: "What Moves the Dead",
    author: "T. Kingfisher",
    url: "horrorimg/img4.webp",
    price: 9.98,
    type: "horror",
  },
  {
    name: "How to Sell a Haunted House",
    author: "Grady Hendrix",
    url: "horrorimg/img5.webp",
    price: 8.89,
    type: "horror",
  },
  {
    name: "Mister Magic",
    author: "Kiersten White",
    url: "horrorimg/img6.webp",
    price: 3.19,
    type: "horror",
  },
  {
    name: "All Hallows",
    author: "Christopher Golden",
    url: "horrorimg/img7.webp",
    price: 5.19,
    type: "horror",
  },
  {
    name: "Dracula Daily ",
    author: "Matt Kirkland",
    url: "horrorimg/img8.webp",
    price: 7.39,
    type: "horror",
  },
  {
    name: "Vampires of El Norte",
    author: "Isabel Canas",
    url: "horrorimg/img9.webp",
    price: 7.39,
    type: "horror",
  },
  {
    name: "Playground",
    author: "Aron Beauregard",
    url: "horrorimg/img1.webp",
    price: 5.69,
    type: "horror",
  }

  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"mystery",
  //  },

  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"geography",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
  //  {name:,
  //   author:,
  //   url: ,
  //price: ,
  //type:"fiction",
  //  },
);

// Carousel
const track = document.querySelector(".carousel-track");
const slideList = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button_right");
const prevButton = document.querySelector(".carousel-button_left");
const indicatorTrack = document.querySelector(".carousel-indicator_container");
const indicatorList = Array.from(indicatorTrack.children);
const slideWidth = slideList[0].getBoundingClientRect().width;
const placeSlide = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slideList.forEach(placeSlide);
const moveSlide = (currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
const moveIndicators = (currentIndicator, targetIndicator) => {
  currentIndicator.classList.remove("current-indicator");
  targetIndicator.classList.add("current-indicator");
};
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const currentIndicator = indicatorTrack.querySelector(".current-indicator");
  if (currentSlide == slideList[0]) {
    const prevSlide = slideList[slideList.length - 1];
    const prevIndicator = indicatorList[indicatorList.length - 1];
    moveSlide(currentSlide, prevSlide);
    moveIndicators(currentIndicator, prevIndicator);
  } else {
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndicator = currentIndicator.previousElementSibling;
    moveSlide(currentSlide, prevSlide);
    moveIndicators(currentIndicator, prevIndicator);
  }
});
const moveRight = () => {
  const currentSlide = track.querySelector(".current-slide");
  const currentIndicator = indicatorTrack.querySelector(".current-indicator");
  if (currentSlide == slideList[slideList.length - 1]) {
    const nextSlide = slideList[0];
    const nextIndicator = indicatorList[0];
    moveSlide(currentSlide, nextSlide);
    moveIndicators(currentIndicator, nextIndicator);
  } else {
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndicator = currentIndicator.nextElementSibling;
    moveSlide(currentSlide, nextSlide);
    moveIndicators(currentIndicator, nextIndicator);
  }
};
nextButton.addEventListener("click", moveRight);
setInterval(moveRight, 2500);

// Suggested random book
const suggestedContainer = document.querySelector(
  ".book_outer-container"
);
const createRandomBook = (amount) => {
  const set = new Set();
  while (set.size < amount) {
    set.add(Math.floor(Math.random() * 29) + 1);
  }
  return Array.from(set);
};
const suggestedRandomArray = createRandomBook(20);
suggestedRandomArray.forEach((position) => {
  const html = `<div class="book_inner-container"><img class='book-img' src=${bookArr[position].url} width="100%" height="200px  ">
  <ul>
    <li class="book-name">${bookArr[position].name}</li>
    <li class="book-author">by ${bookArr[position].author}</li>
    <li class="book-rating">${'⭐⭐⭐⭐'}</li>
    <li class="book-price">${bookArr[position].price.toFixed(2)}$</li>
  </ul>
</div>`;
  suggestedContainer.insertAdjacentHTML("beforeend", html);
  console.log(1);
});

