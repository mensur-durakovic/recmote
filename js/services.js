let sidedrawerOpen = false;
let activeSidedrawerItem = "about-us";

function toggleSidedrawer() {
  if (!sidedrawerOpen) {
    $(".sidedrawer").addClass("sidedrawer-active");
    sidedrawerOpen = true;
  } else {
    $(".sidedrawer").removeClass("sidedrawer-active");
    sidedrawerOpen = false;
  }
}

function setActiveSidedrawerItem(newActiveSidedrawerItem) {
  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );

  $(newActiveSidedrawerItem).addClass("sidedrawer-menu-body-item-active");
}

$(function () {
  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );
  $("#sidedrawer-services").addClass("sidedrawer-menu-body-item-active");
});

$(document).ready(function () {
  $(".services-carousel-items").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    dots: true,
    dotsClass: "services-carousel-custom-dots", //slick generates this <ul.custom-dots> within the appendDots container
    appendDots: $(".services-carousel-overlay-dots"),
    appendArrows: $(".services-carousel-overlay-arrows"),
    prevArrow: $(".services-carousel-overlay-arrows-prev"),
    nextArrow: $(".services-carousel-overlay-arrows-next"),
  });
});
