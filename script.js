document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.reviews-slider__track')
  const slides = document.querySelectorAll('.reviews-slider__slide')
  const totalSlides = slides.length
  let currentIndex = 0

  function moveSlider() {
    currentIndex = (currentIndex + 1) % totalSlides
    track.style.transform = `translateX(-${currentIndex * 100}%)`
  }

  setInterval(moveSlider, 3000)
})
