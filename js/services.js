let sidedrawerOpen = false;
let activeSidedrawerItem = "services";
const spanish = "Español";
const catalan = "Català";
const english = "English";
function scrollToTop() {
  $("body").scrollTop(0);
}
function changeLanguage(element) {
  if (element.id === "language1" || element.id === "language1-footer") {
    if (element.text === spanish) {
      $("#language1").text(english);
      $("#language1-footer").text(english);
      $("#language2").text(catalan);
      $("#language2-footer").text(catalan);
    } else if (element.text === english) {
      $("#language1").text(spanish);
      $("#language1-footer").text(spanish);
      $("#language2").text(catalan);
      $("#language2-footer").text(catalan);
    }
  } else if (element.id === "language2" || element.id === "language2-footer") {
    if (element.text === catalan) {
      $("#language2").text(english);
      $("#language2-footer").text(english);
      $("#language1").text(spanish);
      $("#language1-footer").text(spanish);
    } else if (element.text === english) {
      $("#language2").text(catalan);
      $("#language2-footer").text(catalan);
      $("#language1").text(spanish);
      $("#language1-footer").text(spanish);
    }
  }
}
function toggleSidedrawer() {
  if (!sidedrawerOpen) {
    $(".sidedrawer").addClass("sidedrawer-active");
    $(".hamburger--spin").addClass("is-active");
    sidedrawerOpen = true;
  } else {
    $(".hamburger--spin").removeClass("is-active");
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
    draggable: false,
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
