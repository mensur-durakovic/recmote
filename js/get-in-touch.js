let sidedrawerOpen = false;
let activeSidedrawerItem = "services";
let inputNameValid = false;
let inputEmailValid = false;
let inputMessageValid = false;

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

function enableButton() {
  if (inputNameValid && inputEmailValid && inputMessageValid) {
    console.log("button enabled");
    $("#contact-form-button").prop("disabled", false);
  } else {
    console.log("button disabled");
    $("#contact-form-button").prop("disabled", true);
  }
}

function inputNameChanged(val) {
  inputNameValid = val.length >= 3;
  enableButton();
}
function inputEmailChanged(val) {
  inputEmailValid = val.length >= 3;
  enableButton();
}
function inputMessageChanged(val) {
  inputMessageValid = val.length >= 3;
  enableButton();
}

function submitForm() {
  console.log("submitted!");
  $(".contact-form-submit").hide(200);
  $(".contact-form-load").addClass("contact-form-load-visible");

  //simulate form submit
  setTimeout(function () {
    $(".contact-form").hide(200);
    $(".contact-thanks").addClass("animate__animated animate__fadeIn");
    $(".contact-thanks").addClass("contact-thanks-visible");
  }, 1500);
}

$(function () {
  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );
  $("#sidedrawer-get-in-touch").addClass("sidedrawer-menu-body-item-active");
});
