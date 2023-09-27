"use strict";
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

// Suggested random book
const suggestedContainer=document.querySelector(".suggested-book_outer-container");
const createRandomSuggestedBook=()=>{
  const set=new Set();
  while(set.size<=10){
    set.add( Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(set);
}
createRandomSuggestedBook()