// Animación al hacer scroll
const sections = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("✅ Gracias por contactarnos. Te responderemos pronto.");
  form.reset();
});

// Carrusel 360 Recycling
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Ajusta al cambiar tamaño de ventana
window.addEventListener('resize', updateCarousel);

// Auto-play cada 5s
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}, 5000);
