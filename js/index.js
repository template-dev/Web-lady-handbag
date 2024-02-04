var swiper = new Swiper(".slider__container", {
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
});
