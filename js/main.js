$(window).on("load resize", function () {
  if ($(window).width() < 576) {
    $("#catalog-slider:not(.slick-initialized)").slick({
      prevArrow: false,
      nextArrow: false,
      dots: true,
    });
  } else {
    $("#catalog-slider.slick-initialized").slick("unslick");
  }
});
