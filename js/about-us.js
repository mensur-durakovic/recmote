let sidedrawerOpen = false;
let activeSidedrawerItem = "about-us";

const variant0 = `<a href="mailto:hola@recmotestudio.com" class="underlined-hover"> 
<div class="about-us-team-row-item-hover about-us-team-row-item-hover-variant0">
    <img src="../assets/envelope-black.svg" alt="black envelope">
    <span class="about-us-team-row-item-hover-title">carolina salvador</span>
    <span class="about-us-team-row-item-hover-description">Manager director</span>
</div></a>`;
const variant1 = `<a href="mailto:hola@recmotestudio.com" class="underlined-hover"> 
<div class="about-us-team-row-item-hover about-us-team-row-item-hover-variant1">
    <img src="../assets/envelope-white.svg" alt="white envelope">
    <span class="about-us-team-row-item-hover-title">carolina salvador</span>
    <span class="about-us-team-row-item-hover-description">Manager director</span>
</div></a>`;
const variant2 = `<a href="mailto:hola@recmotestudio.com" class="underlined-hover"> 
<div class="about-us-team-row-item-hover about-us-team-row-item-hover-variant2">
    <img src="../assets/envelope-red.svg" alt="red envelope">
    <span class="about-us-team-row-item-hover-title">carolina salvador</span>
    <span class="about-us-team-row-item-hover-description">Manager director</span>
</div></a>`;

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
  if ($(this).data("item-type") !== "hover") {
    return;
  }

  $(".about-us-team-row-item-hover").addClass(
    "about-us-team-row-item-hover-not-visible"
  );

  const randomNumber = getRandomInt(3); // 0,1,2
  if (randomNumber === 0) {
    $(this).append(variant0);
  } else if (randomNumber === 1) {
    $(this).append(variant1);
  } else if (randomNumber === 2) {
    $(this).append(variant2);
  }
  const className = `.about-us-team-row-item-hover-variant${randomNumber}`;
  const result = $(this).find(className);
  result
    .removeClass("about-us-team-row-item-hover-not-visible")
    .addClass("about-us-team-row-item-hover-visible");
}
function hoverOut() {
  if ($(this).data("item-type") !== "hover") {
    return;
  }
  const result = $(this).find(".about-us-team-row-item-hover-visible");

  $(result).addClass("about-us-team-row-item-hover-not-visible");
}

$(function () {
  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );
  $("#sidedrawer-about-us").addClass("sidedrawer-menu-body-item-active");
  //event for hover cards
  $(".about-us-team-row-item").hover(hoverIn, hoverOut);
});