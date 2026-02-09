// ===== Dark Mode Toggle =====
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.querySelector('i').classList.toggle('fa-sun');
  darkToggle.querySelector('i').classList.toggle('fa-moon');
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// ===== Scroll Progress Bar =====
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';

  // Back-to-top button
  const backToTop = document.querySelector('.back-to-top');
  if (scrollTop > 300) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});

// ===== Smooth Scroll for Back-to-Top =====
document.querySelector('.back-to-top').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
