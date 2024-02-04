const sliderContainer = document.querySelector('.slider__container');
const sliderList = document.querySelector('.slider__list'); // Добавлена точка
const sliderItems = document.querySelectorAll('.slider__item'); // Добавлена точка
const totalSlides = sliderItems.length;
const slideWidth = sliderItems[0].offsetWidth;
let currentIndex = 0;
let touchStartX = 0;

function updateSlider() {
  sliderList.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchmove', (e) => {
  const touchEndX = e.touches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
});

function loopSlides() {
  nextSlide();
}

setInterval(loopSlides, 5000);
