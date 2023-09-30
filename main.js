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

const locomotive = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
locomotive();

const navAnimation = () => {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0%",
      end: "top -5%",
      scrub: 1,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0%",
      end: "top -5%",
      scrub: 1,
    },
  });
};
navAnimation();

const videoconAnimation = () => {
  let videocon = document.querySelector("#video-container");
  let playbtn = document.querySelector("#play");

  if (window.innerWidth >= 500) {
    videocon.addEventListener("mouseenter", () => {
      gsap.to(playbtn, {
        scale: 1,
        top: "-39vw",
      });
    });

    videocon.addEventListener("mouseleave", () => {
      gsap.to(playbtn, {
        scale: 0,
      });
    });

    videocon.addEventListener("mousemove", (e) => {
      let relX = e.pageX;
      let relY = e.pageY + scrollY;

      gsap.to(playbtn, {
        x: relX - 70,
        y: relY - 30,
      });
    });
  } else {
    gsap.to(playbtn, {
      top: "50%",
      left: "50%",
    });
  }
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
    gsap.to(cursor, {
      scale: 0,
    });
  });

  page3.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      left: e.pageX - 95,
      top: e.pageY - 95,
      scale: 1,
    });
  });
};
cursorFollow();
