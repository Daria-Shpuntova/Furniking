$('.openmodal').click(function (e) {
         e.preventDefault();
         $('.modal').addClass('opened');
    });
$('.closemodal').click(function (e) {
         e.preventDefault();
         $('.modal').removeClass('opened');
    });


var slideIndexX = 1;
showSlidesX(slideIndexX);

function plusSlidesX(n) {
  showSlidesX(slideIndexX += n);
}

function currentSlideX(n) {
  showSlidesX(slideIndexX = n);
}

function showSlidesX(n) {
  var i;
  var slidesX = document.getElementsByClassName("center-item");
  var dotsX = document.getElementsByClassName("dot");
  if (n > slidesX.length) {slideIndexX = 1}
  if (n < 1) {slideIndexX = slidesX.length}
  for (i = 0; i < slidesX.length; i++) {
      slidesX[i].style.display = "none";
  }
  for (i = 0; i < dotsX.length; i++) {
      dotsX[i].className = dotsX[i].className.replace(" active", "");
  }
  slidesX[slideIndexX-1].style.display = "block";
  dotsX[slideIndexX-1].className += " active";
}


$(function(){
    $(".btn_menu1").click(function(){
        if ($(".search").hasClass("show_menu") && $(".avatar").hasClass("show_menu") && $(".menu1").hasClass("show_menu") && $(".main").hasClass("show_main")){
            $(".search").removeClass("show_menu");
            $(".avatar").removeClass("show_menu");
            $(".menu1").removeClass("show_menu");
            $(".main").removeClass("show_main");
        } else {
            $(".search").addClass("show_menu");
            $(".avatar").addClass("show_menu");
            $(".menu1").addClass("show_menu");
            $(".main").addClass("show_main");
        }
    });
});

$(function(){
    $(".allcollections").click(function(){
        if ($(".menu2").hasClass("show")){
            $(".menu2").removeClass("show");
        } else {
            $(".menu2").addClass("show");
        }
    });
});



var slideIndexTNB = 1;
showSlidesTNB(slideIndexTNB);

function plusSlidesTNB(n) {
  showSlidesTNB(slideIndexTNB += n);
}

function currentSlideTNB(n) {
  showSlidesTNB(slideIndexTNB = n);
}

function showSlidesTNB(n) {
  var i;
  var slidesTNB = document.getElementsByClassName("trending-imgs");
  var dotsTNB = document.getElementsByClassName("trending-menu1");
  if (n > slidesTNB.length) {slideIndexTNB = 1}
  if (n < 1) {slideIndexTNB = slidesTNB.length}
  for (i = 0; i < slidesTNB.length; i++) {
      slidesTNB[i].style.display = "none";
  }
  for (i = 0; i < dotsTNB.length; i++) {
      dotsTNB[i].className = dotsTNB[i].className.replace(" active1", "");
  }
  slidesTNB[slideIndexTNB-1].style.display = "block";
  dotsTNB[slideIndexTNB-1].className += " active1";
}



var slideIndexT = 1;
showSlidesT(slideIndexT);

function plusSlidesT(n) {
  showSlidesT(slideIndexT += n);
}

function currentSlideT(n) {
  showSlidesT(slideIndexT = n);
}

function showSlidesT(n) {
  var i;
  var slidesT = document.getElementsByClassName("trending-img-top");
  var dotsT = document.getElementsByClassName("svgT");
  if (n > slidesT.length) {slideIndexT = 1}
  if (n < 1) {slideIndexT = slidesT.length}
  for (i = 0; i < slidesT.length; i++) {
      slidesT[i].style.display = "none";
  }
  for (i = 0; i < dotsT.length; i++) {
      dotsT[i].className = dotsT[i].className.replace(" activeT", "");
  }
  slidesT[slideIndexT-1].style.display = "block";
  dotsT[slideIndexT-1].className += " activeT";
}




var slideIndexN = 1;
showSlidesN(slideIndexN);

function plusSlidesN(n) {
  showSlidesN(slideIndexN += n);
}

function currentSlideN(n) {
  showSlidesN(slideIndexN = n);
}

function showSlidesN(n) {
  var i;
  var slidesN = document.getElementsByClassName("trending-img-new");
  var dotsN = document.getElementsByClassName("svgN");
  if (n > slidesN.length) {slideIndexN = 1}
  if (n < 1) {slideIndexN = slidesN.length}
  for (i = 0; i < slidesN.length; i++) {
      slidesN[i].style.display = "none";
  }
  for (i = 0; i < dotsN.length; i++) {
      dotsN[i].className = dotsN[i].className.replace(" activeN", "");
  }
  slidesN[slideIndexN-1].style.display = "block";
  dotsN[slideIndexN-1].className += " activeN";
}


var slideIndexB = 1;
showSlidesB(slideIndexB);

function plusSlidesB(n) {
  showSlidesB(slideIndexB += n);
}

function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}

function showSlidesB(n) {
  var i;
  var slidesB = document.getElementsByClassName("trending-img-best");
  var dotsB = document.getElementsByClassName("svgB");
  if (n > slidesB.length) {slideIndexB = 1}
  if (n < 1) {slideIndexB = slidesB.length}
  for (i = 0; i < slidesB.length; i++) {
      slidesB[i].style.display = "none";
  }
  for (i = 0; i < dotsB.length; i++) {
      dotsB[i].className = dotsB[i].className.replace(" activeB", "");
  }
  slidesB[slideIndexB-1].style.display = "block";
  dotsB[slideIndexB-1].className += " activeB";
}


var slideIndexOP = 1;
showSlidesOP(slideIndexOP);

function plusSlidesOP(n) {
  showSlidesOP(slideIndexOP += n);
}

function currentSlideOP(n) {
  showSlidesOP(slideIndexOP = n);
}

function showSlidesOP(n) {
  var i;
  var slidesOP = document.getElementsByClassName("op-img");
  var dotsOP = document.getElementsByClassName("our-products-menu1");
  if (n > slidesOP.length) {slideIndexOP = 1}
  if (n < 1) {slideIndexOP = slidesOP.length}
  for (i = 0; i < slidesOP.length; i++) {
      slidesOP[i].style.display = "none";
  }
  for (i = 0; i < dotsOP.length; i++) {
      dotsOP[i].className = dotsOP[i].className.replace(" active2", "");
  }
  slidesOP[slideIndexOP-1].style.display = "block";
  dotsOP[slideIndexOP-1].className += " active2";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("customer-center");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}