"use strict";
// Books init

const bookArr=new Array([
  {name:'Chain Gang All Stars',
  author:"Nana Kwame Adjei-Brenyah",
  url:"fiction img/img1",
  genre:"fiction"
 },
 {name:"Where there was Fire",
  author:"John Manuel Arias",
  url:"fiction img/img2" ,
  type:"fiction",
 },
 {name:'In Memoriam',
  author:"Alice Winn",
  url:"fiction img/img3" ,
  type:"fiction",
 },
 {name:"The East Indian",
  author:"Brindan Charry",
  url:"fiction img/img4" ,
  type:"fiction",
 },
 {name:"Open Throat",
  author:"Henry Hoke",
  url:"fiction img/img4" ,
  type:"fiction",
 },
 {name:"Harry Potter",
  author:"J.K.Rowling",
  url:"fiction img/img5" ,
  type:"fiction",
 },
 {name:'The Berry Pickers',
  author:"Amanda Peters",
  url:"fiction img/img6" ,
  type:"fiction",
 },
 {name:"Iron Flame",
  author:"Rebecca Yarros",
  url:"fiction img/img7" ,
  type:"fiction",
 },
 {name:"Rouge",
  author:"Mona Awad",
  url:"fiction img/img8" ,
  type:"fiction",
 },
 {name:"The Hacienda",
  author:"Isabel Canas",
  url:"fiction img/img9" ,
  type:"fiction",
 },
 {name:"The Rabbit Hutch",
  author:"Tess Gunty",
  url:"fiction img/img10" ,
  type:"fiction",
 },


 {name:"Atomic Habits",
  author:"James Clear",
  url: "psychology img/img1",
  type:"psychology",
 },
 {name:"The Body Keeps the Score:Brain, Mind, and Body in the Healig of Trauma",
  author:"Bessel van der Kolk",
  url: "psychology img/img2",
  type:"psychology",
 },
 {name:"Unmasking Autism",
  author:"Denvon Price",
  url: "psychology img/img3",
  type:"psychology",
 },
 {name:"Locked up Inside: The Mind of a Convict",
  author:"Dr. Maria A.Jones",
  url: "psychology img/img4",
  type:"psychology",
 },
 {name:"Fires in the Dark: Healing",
  author:"Kay Refield Jamison",
  url: "psychology img/img5",
  type:"psychology",
 },
 {name:"Seeing the Mind",
  author:"Lorem Ipsum",
  url: "psychology img/img6",
  type:"psychology",
 },
 {name:"The Empathy Effect",
  author:"Helen Riess MD",
  url: "psychology img/img7",
  type:"psychology",
 },
 {name:"An Immense World",
  author:"Ed Yng",
  url: "psychology img/img8",
  type:"psychology",
 },
 {name:"Misbelief",
  author:"Dan Ariely",
  url: "psychology img/img9",
  type:"psychology",
 },
 {name:"While you were out",
  author:"Ipsum Lorem",
  url: "psychology img/img10",
  type:"psychology",
 },

 {name:"Dead Eleven",
  author:"Jimmy Juliano",
  url: "horror img/img1",
  type:"horror",
 },
 {name:"The Auctioneer",
  author:"Joan Samson",
  url: "horror img/img2",
  type:"horror",
 },
 {name:"Hidden Pictures",
  author:"Jason Rekulak",
  url: "horror img/img3",
  type:"horror",
 },
 {name:"What Moves the Dead",
  author:"T. Kingfisher",
  url: "horror img/img4",
  type:"horror",
 },
 {name:"How to Sell a Haunted House",
  author:"Grady Hendrix",
  url: "horror img/img5",
  type:"horror",
 },
 {name:"Mister Magic",
  author:"Kiersten White",
  url: "horror img/img6",
  type:"horror",
 },
 {name:"All Hallows",
  author:"Christopher Golden",
  url: "horror img/img7",
  type:"horror",
 },
 {name:"Dracula Daily ",
  author:"Matt Kirkland",
  url: "horror img/img8",
  type:"horror",
 },
 {name:"Vampires of El Norte",
  author:"Isabel Canas",
  url: "horror img/img9",
  type:"horror",
 },
 {name:"Playground",
  author:"Aron Beauregard",
  url: "horror img/img10",
  type:"horror",
 },


//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"mystery",
//  },


//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"geography",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },
//  {name:,
//   author:,
//   url: ,
//   type:"fiction",
//  },

])

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
    const prevIndicator=indicatorList[indicatorList.length-1];
    moveSlide(currentSlide, prevSlide);
    moveIndicators(currentIndicator,prevIndicator);
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
    const nextIndicator=indicatorList[0];
    moveSlide(currentSlide, nextSlide);
    moveIndicators(currentIndicator,nextIndicator);
  } else {
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndicator = currentIndicator.nextElementSibling;
    moveSlide(currentSlide, nextSlide);
    moveIndicators(currentIndicator, nextIndicator);
  }
};
nextButton.addEventListener("click", moveRight);
setInterval(moveRight, 2500);
// Catergories
const fictionCatergories=document.querySelector(".fiction-Catergories").addEventListener("click",(e)=>{
  const fictionArray=books.map((book)=>{
    return book.catergories=="fiction"
  })
})

const horrorCatergories=document.querySelector(".horror-Catergories").addEventListener("click",(e)=>{
  const horrornArray=books.map((book)=>{
    return book.catergories=="horror"
  })
})
const healthCatergories=document.querySelector(".health-Catergories").addEventListener("click",(e)=>{
  const healthArray=books.map((book)=>{
    return book.catergories=="health"
  })
})
const mysteryCatergories=document.querySelector(".mystery-Catergories").addEventListener("click",(e)=>{
  const mysteryArray=books.map((book)=>{
    return book.catergories=="mystery"
  })
})
const geographyCatergories=document.querySelector(".geography-Catergories").addEventListener("click",(e)=>{
 const geographyArray= books.map((book)=>{
    return book.catergories=="geography"
  })
})
const psychologyCatergories=document.querySelector(".psychology-Catergories").addEventListener("click",(e)=>{
  const psychologyArray=books.map((book)=>{
    return book.catergories=="psychology"
  })
})
const technologyCatergories=document.querySelector(".technology-Catergories").addEventListener("click",(e)=>{
  const technologyArray=books.map((book)=>{
    return book.catergories=="technology"
  })
})
const businessCatergories=document.querySelector(".business-Catergories").addEventListener("click",(e)=>{
  const businessArray=books.map((book)=>{
    return book.catergories=="business"
  })
})




// Suggested random book
const suggestedContainer=document.querySelector(".suggested-book_outer-container");
const createRandomSuggestedBook=()=>{
  const set=new Set();
  while(set.size<20){
    set.add( Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(set);
}
const suggestedRandomArray=createRandomSuggestedBook();
suggestedRandomArray.forEach((position)=>{
  const html=`   <img src=${books[position].img} width="80px" height="80px">
  <ul>
    <li class="book-name">${books[position].name}</li>
    <li class="book-author">by ${books[position].author}</li>
    <li class="book-rating">${books[position].author}</li>
    <li class="book-price">${books[position].price}$</li>
  </ul>
</div>`;
suggestedContainer.insertAdjacentElement("afterbegin",html);
});



