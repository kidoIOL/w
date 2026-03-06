// let index = 0;
// const slides = document.getElementById('slides');
// const total = 5;

// function moveSlide(step) {
//     index = (index + step + total) % total;
//     slides.style.transform = `translateX(${-index * 100}%)`;
// }

// // Auto-slide setup
// let autoSlide = setInterval(() => moveSlide(1), 3000);

// // Pause on hover logic
// const carousel = document.getElementById('carousel');
// carousel.addEventListener('mouseover', () => clearInterval(autoSlide));
// carousel.addEventListener('mouseout', () => {
//     autoSlide = setInterval(() => moveSlide(1), 3000);
// });



const swiper = new Swiper('.swiper', {
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  },
});