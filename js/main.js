let sidedrawerOpen = false;
let activeSidedrawerItem = "home";

const variant0 = `<a href="#video-modal" rel="modal:open">
<div class="featured-work-commercials-row-item-hover featured-work-commercials-row-item-hover-variant0">
<img src="./assets/play-black.svg" alt="play arrow">
<span class="featured-work-commercials-row-item-hover-title">oxfam intermon</span>
<span class="featured-work-commercials-row-item-hover-description">Ayuda inmediata</span>
</div>
</a>`;
const variant1 = `<a href="#video-modal" rel="modal:open">
<div class="featured-work-commercials-row-item-hover featured-work-commercials-row-item-hover-variant1">
<img src="./assets/play-white.svg" alt="play arrow">
<span class="featured-work-commercials-row-item-hover-title">optrex</span>
<span class="featured-work-commercials-row-item-hover-description">Tinniest footprint</span>
</div>
</a>`;
const variant2 = `<a href="#video-modal" rel="modal:open">
<div class="featured-work-commercials-row-item-hover featured-work-commercials-row-item-hover-variant2">
<img src="./assets/play-red.svg" alt="play arrow">
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
  if (randomNumber === 0) {
    $(this).append(variant0);
  } else if (randomNumber === 1) {
    $(this).append(variant1);
  } else if (randomNumber === 2) {
    $(this).append(variant2);
  }
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
  //main video background scale fit
  scaleToFill();
  $(".video-background").on("loadeddata", scaleToFill);
  $(window).resize(function () {
    scaleToFill();
  });

  //event for hover cards
  $(".featured-work-commercials-row-item").hover(hoverIn, hoverOut);

  let currentScrollPos = 0;
  let timeout = null;

  $("body").scroll(function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        clearTimeout(timeout);
        timeout = null;
        if ($("body").scrollTop() <= currentScrollPos) {
          //check if user scrolled past point of title for featured work
          if ($("body").scrollTop() < $("#featured-work").position().top) {
            document.body.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
        // saves the new position for iteration.
        currentScrollPos = $("body").scrollTop();
      }, 250);
    }
  });
});
