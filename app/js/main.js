$(function () {
  $('.header__inner-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button class="slick-arrow next-arrow"><img src="img/header/next.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow prev-arrow"><img src="img/header/prev.png" alt=""></button>',
  });
  $('.quote__inner').slick({
    dots: false,
    prevArrow: '<button class="slick-arrow next-array"><img src="img/header/right.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow prev-array"><img src="img/header/left.png" alt=""></button>',
  });


  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

});