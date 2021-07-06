var slide = document.getElementsByClassName("slide");

var next_btn = document.querySelector(".next-btn");
var pre_btn = document.querySelector(".pre-btn");

var slideIndex = 0;
showSlide();

function plusSlide(n) {
  slideIndex += n;
  showSlide();
  console.log(slideIndex);
}

function showSlide() {
  if (slideIndex > slide.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slide.length - 1;
  for (var i = 0; i < slide.length; i++) {
    slide[i].style.transform = `translateX(${100*(-slideIndex)}%)`;
  }
}



// Vị trí slide hiện tại đang là 0 thì tất cả slide sẽ có transform translate x 0%
//                               1                                              -100%
//                               2                                              -200%
