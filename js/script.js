jQuery(function ($) {
  "use strict";

  console.clear();

  const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
  const backLink = `<li class="nav-item">
    <a class="nav-link nav-back-link" href="javascript:;">
      Back
    </a>
  </li>`;

  navExpand.forEach((item) => {
    item
      .querySelector(".nav-expand-content")
      .insertAdjacentHTML("afterbegin", backLink);
    item
      .querySelector(".nav-link")
      .addEventListener("click", () => item.classList.add("active"));
    item
      .querySelector(".nav-back-link")
      .addEventListener("click", () => item.classList.remove("active"));
  });

  // ---------------------------------------
  // not-so-important stuff starts here

  const ham = document.getElementById("ham");
  ham.addEventListener("click", function () {
    document.body.classList.toggle("nav-is-toggled");
  });

  if ($(".fa-bars").length) {
    $(".fa-bars").on("click", function () {
      $(".header_top .inner_header nav > ul").show();
      $(this).hide();
      $(".fa-times").show();
    });

    $(".fa-times").on("click", function () {
      $(".header_top .inner_header nav > ul").hide();
      $(this).hide();
      $(".fa-bars").show();
    });
  }

  if ($(".home_slider").length) {
    $(".home_slider").slick({
      vertical: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 900,
    });
  }

  
  if ($(".shop_carusel").length) {

    $(".shop_carusel").slick({
      swipeToSlide: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      appendArrows: $(".shop_slider_navigation"),
      prevArrow: '<div class="left"><i class="fas fa-arrow-left"></i></div>',
      nextArrow: '<div class="right"><i class="fas fa-arrow-right"></i></div>',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".testimonial_carousel").length) {
    $(".testimonial_carousel").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: $(".testimonial_slider_box"),
      prevArrow:
        '<div class="left_arrow"> <div class="left"> <i class="fas fa-arrow-left"></i> </div> </div>',
      nextArrow:
        '<div class="right_arrow"> <div class="right"> <i class="fas fa-arrow-right"></i> </div> </div>',
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".testimonial_carousel").on("afterChange", function (
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      var tabs_container = $(".testimonial_tab_container");
      var current_index = currentSlide + 1;

      tabs_container.find($(".tab-item")).hide();
      tabs_container.find($(".tab-" + current_index)).show();
    });
  }

  if ($(".content_slider_twitter").length) {
    $(".content_slider_twitter").slick({
      vertical: true,
      appendArrows: $(".tweet_slider .arrows"),
      prevArrow: '<span class="up"><i class="fas fa-arrow-up"></i></span>',
      nextArrow: '<span class="down"><i class="fas fa-arrow-down"></i></span>',
    });
  }

  if ($(".open_video").length) {
    $(".open_video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  }

  if ($(".testy_gallery").length) {
    $(".testy_gallery").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      mainClass: "mfp-img-mobile",
      image: {
        verticalFit: true,
      },
    });
  }
});
