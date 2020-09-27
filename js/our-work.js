let sidedrawerOpen = false;
let activeSidedrawerItem = "our-work";

const variant0 = `<a href="#video-modal" rel="modal:open">
<div class="featured-work-commercials-row-item-hover featured-work-commercials-row-item-hover-variant0">
<img src="../assets/play-black.svg" alt="play arrow">
<span class="featured-work-commercials-row-item-hover-title">oxfam intermon</span>
<span class="featured-work-commercials-row-item-hover-description">Ayuda inmediata</span>
</div>
</a>`;
const variant1 = `<a href="#video-modal" rel="modal:open">
<div class="featured-work-commercials-row-item-hover featured-work-commercials-row-item-hover-variant1">
<img src="../assets/play-white.svg" alt="play arrow">
<span class="featured-work-commercials-row-item-hover-title">optrex</span>
<span class="featured-work-commercials-row-item-hover-description">Tinniest footprint</span>
</div>
</a>`;
const variant2 = `<a href="#video-modal" rel="modal:open">
<div class="featured-work-commercials-row-item-hover featured-work-commercials-row-item-hover-variant2">
<img src="../assets/play-red.svg" alt="play arrow">
<span class="featured-work-commercials-row-item-hover-title">skoda fabia</span>
<span class="featured-work-commercials-row-item-hover-description">Drive like crazy</span>
</div>
</a>`;

function isMobile() {
  const result = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  console.log("result", result);
  if (result) {
    return true;
  } else {
    return false;
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function hoverIn() {
  $(".featured-work-commercials-row-item-hover").addClass(
    "featured-work-commercials-row-item-hover-not-visible"
  );
  const randomNumber = getRandomInt(3); // 0,1,2
  /* if (randomNumber === 0) {
    $(this).append(variant0);
  } else if (randomNumber === 1) {
    $(this).append(variant1);
  } else if (randomNumber === 2) {
    $(this).append(variant2);
  } */
  const className = `.featured-work-commercials-row-item-hover-variant${randomNumber}`;
  const result = $(this).find(className);
  result
    .removeClass("featured-work-commercials-row-item-hover-not-visible")
    .addClass("featured-work-commercials-row-item-hover-visible");
}
function hoverOut() {
  const result = $(this).find(
    ".featured-work-commercials-row-item-hover-visible"
  );

  $(result).addClass("featured-work-commercials-row-item-hover-not-visible");
}

function playVideo() {
  $("#video-modal").modal("show");
  if (isMobile()) {
    console.log("mobile true!");
  } else {
    console.log("mobile false!");
  }
}

$(function () {
  //set active item for sidedrawer
  $("#sidedrawer-our-work").addClass("sidedrawer-menu-body-item-active");

  //event for hover cards
  $(".featured-work-commercials-row-item").hover(hoverIn, hoverOut);
});
