let sidedrawerOpen = false;
let activeSidedrawerItem = "about-us";
const spanish = "Español";
const catalan = "Català";
const english = "English";

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

function isMobile() {
  const result = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  if (result) {
    return true;
  } else {
    return false;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function hoverIn() {
  if ($(this).data("item-type") !== "hover") {
    return;
  }
  if (!isMobile()) {
    const randomNumber = getRandomInt(3); // 0,1,2
    const className = `.about-us-team-row-item-hover-variant${randomNumber}`;
    const result = $(this).find(className);
    result
      .removeClass(
        "about-us-team-row-item-hover-not-visible animate__animated animate__fadeOut animate__fast"
      )
      .addClass(
        "about-us-team-row-item-hover-visible animate__animated animate__fadeIn animate__fast"
      );
  }
}
function hoverOut() {
  if ($(this).data("item-type") !== "hover") {
    return;
  }
  if (!isMobile()) {
    const result = $(this).find(".about-us-team-row-item-hover");
    $(result).addClass("animate__animated animate__fadeOut animate__fast");
  }
}

function itemClicked() {
  if (isMobile()) {
    $(".about-us-team-row-item-hover")
      .addClass("animate__animated animate__fadeOut animate__fast")
      .addClass("about-us-team-row-item-hover-not-visible");
    const randomNumber = getRandomInt(3); // 0,1,2
    const className = `.about-us-team-row-item-hover-variant${randomNumber}`;
    const result = $(this).find(className);
    result
      .removeClass(
        "about-us-team-row-item-hover-not-visible animate__animated animate__fadeOut animate__fast"
      )
      .addClass(
        "about-us-team-row-item-hover-visible animate__animated animate__fadeIn animate__fast"
      );
  }
}

$(function () {
  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );
  $("#sidedrawer-about-us").addClass("sidedrawer-menu-body-item-active");
  //event for hover cards
  $(".about-us-team-row-item").hover(hoverIn, hoverOut);
  $(".about-us-team-row-item").click(itemClicked);
});
