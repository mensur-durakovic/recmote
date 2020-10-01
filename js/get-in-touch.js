let sidedrawerOpen = false;
let activeSidedrawerItem = "services";
let inputNameValid = false;
let inputEmailValid = false;
let inputMessageValid = false;
const spanish = "Español";
const catalan = "Català";
const english = "English";

function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return pattern.test(emailAddress);
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

function enableButton() {
  if (inputNameValid && inputEmailValid && inputMessageValid) {
    $("#contact-form-button").prop("disabled", false);
  } else {
    $("#contact-form-button").prop("disabled", true);
  }
}

function inputNameChanged(val) {
  inputNameValid = val.length >= 3;
  enableButton();
}
function inputEmailChanged(val) {
  $(".contact-form-validation").removeClass("contact-form-validation-visible");
  inputEmailValid = val.length >= 3;
  enableButton();
}
function inputMessageChanged(val) {
  inputMessageValid = val.length >= 3;
  enableButton();
}

function submitForm() {
  const contactEmail = $("#contact-form-email").val();
  if (!isValidEmailAddress(contactEmail)) {
    $("#contact-form-button").prop("disabled", true);
    $(".contact-form-validation").addClass("contact-form-validation-visible");
    return;
  }

  $(".contact-form-submit").hide(200);

  const contactName = $("#contact-form-name").val();
  $(".contact-thanks-title").text(`Thank you ${contactName}!`);
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
