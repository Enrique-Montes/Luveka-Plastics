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
