document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll('#lang-toggle');
  const spanishSection = document.getElementById('spanish-section');
  const englishSection = document.getElementById('english-section');

  let currentLang = 'es';

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentLang === 'es') {
        spanishSection.style.display = 'none';
        englishSection.style.display = 'block';
        toggleBtns.forEach(b => b.textContent = 'Spanish');
        currentLang = 'en';
      } else {
        spanishSection.style.display = 'block';
        englishSection.style.display = 'none';
        toggleBtns.forEach(b => b.textContent = 'Inglés');
        currentLang = 'es';
      }
    });
  });

  // Selecciona todos los botones de hamburguesa y asigna el evento
  const hamburgers = document.querySelectorAll('.hamburger');
  hamburgers.forEach(hamburger => {
    hamburger.addEventListener('click', () => {
      const nav = hamburger.nextElementSibling;
      if (nav && nav.classList.contains('nav-links')) {
        nav.classList.toggle('active');
      }
    });
  });
});
