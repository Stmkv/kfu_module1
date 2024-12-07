document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.reviews-slider__track')
  const slides = document.querySelectorAll('.reviews-slider__slide')
  const totalSlides = slides.length
  let currentIndex = 0

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides
    updateSlider()
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    updateSlider()
  }

  const interval = setInterval(nextSlide, 3000)

  const prevButton = document.querySelector('.reviews-slider__button--prev')
  const nextButton = document.querySelector('.reviews-slider__button--next')

  prevButton.addEventListener('click', () => {
    clearInterval(interval)
    prevSlide()
  })

  nextButton.addEventListener('click', () => {
    clearInterval(interval)
    nextSlide()
  })
})
