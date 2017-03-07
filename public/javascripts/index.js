var x, y = 0;
var carouselMaster;

function init() {
  storeVitals()
  checkForCarousel()
}

function storeVitals() {
  carouselMaster = document.getElementById("slideshow-images");
}

function checkForCarousel() {
  determineScreenSize()

  if (x < 769) {
    console.log("screen is small");
    removeCarousel()
  } else {
    console.log("screen is large");
    replaceCarousel()
  }
}

function determineScreenSize() {
  x = innerWidth;
  y = innerHeight;
}

function removeCarousel() {
    var carousel = document.getElementById("slideshow-images");
    var carouselInner = carousel.innerHTML;
    var carouselParent = document.getElementById("carousel-outer");
    carouselParent.removeChild(carousel);

    var div = document.createElement("div");
    div.id = "carousel-alt";
    div.innerHTML = carouselInner;
    document.getElementById("carousel-outer").appendChild(div)

    var newSlides = document.getElementsByClassName('item')
    for (var i = 0; i < newSlides.length; i++) {
      newSlides[i].className += " active";
    }
}

function replaceCarousel() {
  var carouselParent = document.getElementById("carousel-outer");
  var carouselAlt = document.getElementById("carousel-alt");
  carouselParent.removeChild(carouselAlt);
  carouselParent.appendChild(carouselMaster);
}
