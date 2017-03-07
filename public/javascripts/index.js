var x, y = 0

function init() {
  determineScreenSize()

  if (x < 769) {
    replaceCarousel()
  }
}

function determineScreenSize() {
  x = innerWidth;
  y = innerHeight;
  console.log(x, y);
}

function replaceCarousel() {
    console.log("screen is xs!");
    var carousel = document.getElementById("slideshow-images");
    var carouselInner = carousel.innerHTML;
    var carouselParent = carousel.parentNode;
    carouselParent.removeChild(carousel);

    var div = document.createElement("div");
    div.className = "carousel-alt";
    div.innerHTML = carouselInner;
    document.getElementById("carousel-outer").appendChild(div)

    var newSlides = document.getElementsByClassName('item')
    for (var i = 1; i < newSlides.length; i++) {
      newSlides[i].className += " active";
    }
}
