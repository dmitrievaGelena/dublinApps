$(function () {
  $('.header__inner-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button class="slick-arrow next-arrow"><img src="img/header/next.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow prev-arrow"><img src="img/header/prev.png" alt=""></button>',
    responsive: [{
      breakpoint: 1180,
      settings: {
        arrows: false,
        infinite: true,
        dots: true
      }
    }]

  });
  $('.quote__inner').slick({
    dots: false,
    prevArrow: '<button class="slick-arrow next-array"><img src="img/header/right.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow prev-array"><img src="img/header/left.png" alt=""></button>',
    responsive: [{
      breakpoint: 880,
      settings: {
        arrows: false,
        infinite: true,
        dots: true
      }
    }]
  });
  $('.application__slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-arrow next-arrow"><img src="img/header/next.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow prev-arrow"><img src="img/header/prev.png" alt=""></button>',
    responsive: [{
        breakpoint: 1180,
        settings: {
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        }
      }
    ]



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

  $(".tabs_content-item").not(":first").hide();
  $(".product__inner-tabs .tab").click(function () {
    $(".product__inner-tabs .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
    $(".product__inner-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tabs_content-item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active-tab");

  $('.menu__burger').on('click', function () {
    $('.menu__list').slideToggle();
  });

});