let sidedrawerOpen = false;
let activeSidedrawerItem = "home";
let activeLanguage = "spanish";

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

function playVideo() {
  console.log("playVideo");
}

$(function () {
  scaleToFill();
  $(".video-background").on("loadeddata", scaleToFill);
  $(window).resize(function () {
    scaleToFill();
  });

  $(".featured-work-commercials-row-item").mouseover(function (event) {
    event.stopPropagation();
    const randomNumber = getRandomInt(3); // 0,1,2
    const className = `.featured-work-commercials-row-item-hover-variant${randomNumber}`;
    const result = $(this).find(className);
    result.addClass("featured-work-commercials-row-item-hover-visible");
  });

  $(".featured-work-commercials-row-item").mouseout(function (event) {
    event.stopPropagation();
    $(".featured-work-commercials-row-item-hover").removeClass(
      "featured-work-commercials-row-item-hover-visible"
    );
  });
});
