$(function() {
    $('.header__inner-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-arrow next-arrow"><img src="img/header/next.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow prev-arrow"><img src="img/header/prev.png" alt=""></button>',
      });
          
});