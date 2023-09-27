const loco = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
};
loco();

const videoConAnime = () => {
  const videoContainer = document.querySelector(".video-container");
  const play = document.querySelector(".play");

  videoContainer.addEventListener("mouseenter", () => {
    gsap.to(play, {
      opacity: 1,
      scale: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", () => {
    gsap.to(play, {
      opacity: 0,
      scale: 0,
    });
  });
  videoContainer.addEventListener("mousemove", (e) => {
    gsap.to(play, {
      left: e.x - 50,
      top: e.y - 50,
    });
  });
};
videoConAnime();

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
    duraiton: 0.3,
  });
};
videoAnime();
