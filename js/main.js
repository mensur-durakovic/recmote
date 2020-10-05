let sidedrawerOpen = false;
let activeSidedrawerItem = "home";
let myPlayer;
const spanish = "Español";
const catalan = "Català";
const english = "English";
function scrollToTop() {
  $("body").scrollTop(0);
}
function scaleToFill() {
  $("video.video-background").each(function (_, videoTag) {
    const $video = $(videoTag);
    const videoRatio = videoTag.videoWidth / videoTag.videoHeight;
    const tagRatio = $video.width() / $video.height();
    let val;

    if (videoRatio < tagRatio) {
      val = (tagRatio / videoRatio) * 1.02; // size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges
    } else if (tagRatio < videoRatio) {
      val = (videoRatio / tagRatio) * 1.02;
    }

    $video.css("transform", "scale(" + val + "," + val + ")");
  });
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

    const videoTitle = $(this)
      .find(".featured-work-commercials-row-item-hover-visible")
      .find(".featured-work-commercials-row-item-hover-title")
      .text();
    const videoDesc = $(this)
      .find(".featured-work-commercials-row-item-hover-visible")
      .find(".featured-work-commercials-row-item-hover-description")
      .text();

    console.log("videoTitle", videoTitle);
    console.log("videoDesc", videoDesc);

    $(".video-recmote-info-title").text(videoTitle);
    $(".video-recmote-info-text").text(videoDesc);
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

function scrollToFeaturedWork() {
  const item = document.getElementById("featured-work");
  const wrapper = document.body;
  const headerHeight = 84;
  const count = item.offsetTop - wrapper.scrollTop - headerHeight;
  wrapper.scrollBy({ top: count, left: 0, behavior: "smooth" });
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
        if (isMobile()) {
          //add close button
          $(".mfp-close").html(
            '<img src="../assets/close-white.svg" class="video-recmote-close" alt="close" >'
          );
        }

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
  //main video background scale fit
  scaleToFill();
  $(".video-background").on("loadeddata", scaleToFill);
  $(window).resize(function () {
    scaleToFill();
  });

  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );
  $("#sidedrawer-home").addClass("sidedrawer-menu-body-item-active");

  //event for hover cards
  $(".featured-work-commercials-row-item").hover(hoverIn, hoverOut);
  $(".featured-work-commercials-row-item").click(itemClicked);

  /*   $("#header-hamburger").on("click", function (e) {
    $("#header-hamburger").toggleClass("is-active");
    toggleSidedrawer();
  }); */

  let currentScrollPos = 0;
  let timeout = null;

  $("body").scroll(function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        clearTimeout(timeout);
        timeout = null;
        if ($("body").scrollTop() <= currentScrollPos) {
          //scrolls up
          //check if user scrolled past point of title for featured work
          if ($("#featured-work").position().top > 200) {
            document.body.scrollTo({ top: 0, behavior: "smooth" });
          }

          //check if user scrolled past video bg and change color
          if ($("body").scrollTop() < $("#featured-work").position().top) {
            if ($(".header").hasClass("header-black")) {
              $(".header")
                .removeClass("header-black")
                .addClass("header-transparent");
            }
          }
        } else {
          //scrolls down
          if ($("body").scrollTop() > $("#featured-work").position().top) {
            if ($(".header").hasClass("header-transparent")) {
              console.log("has transparent");
              $(".header")
                .removeClass("header-transparent")
                .addClass("header-black");
            }
          }
        }

        // saves the new position for iteration.
        currentScrollPos = $("body").scrollTop();
      }, 250);
    }
  });
});
