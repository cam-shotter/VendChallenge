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
    var carousel = document.getElementById("slideshow-images")

    carousel.parentNode.removeChild(carousel)
}
