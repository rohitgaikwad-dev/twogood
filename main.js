let scrollY = 0;

const loco = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  scroll.on("scroll", (args) => {
    scrollY = args.delta.y;
  });
};
loco();

const videoconAnimation = () => {
  let videocon = document.querySelector("#video-container");
  let playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", () => {
    gsap.to(playbtn, {
      scale: 1,
    });
  });

  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      scale: 0,
    });
  });

  document.addEventListener("mousemove", (e) => {
    let relX = e.pageX;
    let relY = e.pageY + scrollY;

    gsap.to(playbtn, {
      x: relX - 75,
      y: relY - 50,
    });
  });
};
videoconAnimation();

const textAnime = () => {
  gsap.from(".bonding h1", {
    top: "100%",
    stagger: 0.3,
  });
};
textAnime();

const videoAnime = () => {
  gsap.from("video", {
    top: "10%",
    opacity: 0,
    delay: 0.3,
  });
};
videoAnime();

const cursorFollow = () => {
  let cursor = document.querySelector("#cursor");
  let page3 = document.querySelector("#page3");

  page3.addEventListener("mouseleave", () => {
    gsap.to(cursor,{
      scale: 0,
    })
  })

  page3.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      left: e.pageX - 95,
      top: e.pageY - 95,
      scale: 1,
    });
  });
};
cursorFollow();
