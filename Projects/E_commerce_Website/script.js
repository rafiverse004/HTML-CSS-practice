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

// ===== Scroll Progress Bar & Back-to-Top =====
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';

  if(scrollTop > 300) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});

backToTop.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Smooth Scroll for Logo =====
document.querySelector('.logo').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ===== Support Form Submit (Demo) =====
const supportForm = document.getElementById('supportForm');
supportForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(supportForm);
  if(!data.get('name') || !data.get('email') || !data.get('issue') || !data.get('message')){
    alert('Fill all required fields.');
    return;
  }
  alert('Support request submitted successfully (demo).');
  supportForm.reset();
});

// ===== Contact Info =====
const emailCard = document.getElementById('emailCard');
emailCard.addEventListener('click', () => {
  const email = 'snurflixbd@gmail.com';
  const mailtoLink = 'mailto:' + email;
  const gmailWeb = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + email;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    window.location.href = mailtoLink; // mobile default email
  } else {
    window.open(gmailWeb, '_blank'); // desktop Gmail
  }
});

// ===== WhatsApp & Call Cards (Optional) =====
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('click', e => {
    const link = card.getAttribute('data-link');
    if(link) window.open(link, '_blank');
  });
});
