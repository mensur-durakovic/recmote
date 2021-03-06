let sidedrawerOpen = false;
let activeSidedrawerItem = "our-work";
const spanish = "Español";
const catalan = "Català";
const english = "English";
let myPlayer;
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
  console.log("toggleSidedrawer");
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
  if (!isMobile()) {
    const randomNumber = getRandomInt(3); // 0,1,2
    const className = `.featured-work-commercials-row-item-hover-variant${randomNumber}`;
    const result = $(this).find(className);
    result
      .removeClass("featured-work-commercials-row-item-hover-not-visible")
      .addClass("featured-work-commercials-row-item-hover-visible")
      .click(hoverElementClicked);
  }
}
function hoverOut() {
  if (!isMobile()) {
    $(this)
      .find(".featured-work-commercials-row-item-hover")
      .removeClass("featured-work-commercials-row-item-hover-visible")
      .addClass("featured-work-commercials-row-item-hover-not-visible");
  }
}

function itemClicked() {
  if (isMobile()) {
    $(".featured-work-commercials-row-item-hover").addClass(
      "featured-work-commercials-row-item-hover-not-visible"
    );
    const randomNumber = getRandomInt(3); // 0,1,2
    const className = `.featured-work-commercials-row-item-hover-variant${randomNumber}`;
    const result = $(this).find(className);
    result
      .removeClass("featured-work-commercials-row-item-hover-not-visible")
      .delay(1000)
      .addClass("featured-work-commercials-row-item-hover-visible");
    $(".featured-work-commercials-row-item-hover").click(hoverElementClicked);

    const videoTitle = $(this)
      .find(className)
      .find(".featured-work-commercials-row-item-hover-title")
      .text();
    const videoDesc = $(this)
      .find(className)
      .find(".featured-work-commercials-row-item-hover-description")
      .text();

    console.log("videoTitle", videoTitle);
    console.log("videoDesc", videoDesc);

    $(".video-recmote-info-title").text(videoTitle);
    $(".video-recmote-info-text").text(videoDesc);
  }
}

function hoverElementClicked() {
  myPlayer = videojs("example_video_1");
  $.magnificPopup.open({
    items: {
      src: "#test-popup",
      midClick: true,
      type: "inline",
    },
    callbacks: {
      open: function () {
        $.magnificPopup.instance.close = function () {
          // Do whatever else you need to do here
          myPlayer.currentTime(0);
          myPlayer.pause();

          // Call the original close method to close the popup
          $.magnificPopup.proto.close.call(this);
        };
      },
    },
  });
  myPlayer.play();
}

$("document").ready(function () {
  //set active item for sidedrawer
  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );
  $("#sidedrawer-our-work").addClass("sidedrawer-menu-body-item-active");

  //event for hover cards
  $(".featured-work-commercials-row-item").hover(hoverIn, hoverOut);
  $(".featured-work-commercials-row-item").click(itemClicked);
});
