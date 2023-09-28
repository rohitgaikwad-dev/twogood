const loco = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
};
loco();

function videoconAnimation() {
  var videocon = document.querySelector(".video-container");
  var playbtn = document.querySelector(".play");
  videocon.addEventListener("mouseenter", () => {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      scale: 0,
    });
  });
  document.addEventListener("mousemove", (e) => {
    gsap.to(playbtn, {
      left: e.x - 70,
      top: e.y - 80,
    });
  });
}
videoconAnimation();

const textAnime = () => {
  gsap.from(".bonding h1", {
    top: "100%",
    stagger: 0.3,
  });
};
textAnime();

const videoAnime = () => {
  gsap.from(".video", {
    top: "10%",
    opacity: 0,
    delay: 0.3,
  });
};
videoAnime();
