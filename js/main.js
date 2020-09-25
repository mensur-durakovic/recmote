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
  console.log("toggleSidedrawer", sidedrawerOpen);
  if (!sidedrawerOpen) {
    $(".sidedrawer").addClass("sidedrawer-active");
    //$(".sidedrawer").show("slide", { direction: "right" }, 1000);
    sidedrawerOpen = true;
  } else {
    $(".sidedrawer").removeClass("sidedrawer-active");
    //$(".sidedrawer").hide("slide", { direction: "right" }, 1000);
    sidedrawerOpen = false;
  }
}

function setActiveSidedrawerItem(newActiveSidedrawerItem) {
  $(".sidedrawer-menu-body-item-text").removeClass(
    "sidedrawer-menu-body-item-active"
  );
  console.log("setActiveSidedrawerItem", newActiveSidedrawerItem);
  $(newActiveSidedrawerItem).addClass("sidedrawer-menu-body-item-active");
}

$(function () {
  scaleToFill();
  $(".video-background").on("loadeddata", scaleToFill);
  $(window).resize(function () {
    scaleToFill();
  });
});
