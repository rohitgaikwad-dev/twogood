const videoConAnime = ()=>{
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
}
videoConAnime();

gsap.from('#page1 h1',{
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.3,
})