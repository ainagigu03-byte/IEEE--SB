// ===========================
// HAMBURGER MENU (mobile nav)
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===========================
// COUNTDOWN TIMER
// Change the date below to your actual next event date!
// Format: 'Month Day, Year HH:MM:SS'
// ===========================
const eventDate = new Date('June 15, 2026 10:00:00').getTime();

function updateCountdown() {
  const now  = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<p style="color:var(--accent)">Event is Live! 🎉</p>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs  = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  // pad with leading zero if needed: e.g. 7 → "07"
  const pad = n => String(n).padStart(2, '0');

  document.getElementById('cd-days').textContent = pad(days);
  document.getElementById('cd-hrs').textContent  = pad(hrs);
  document.getElementById('cd-min').textContent  = pad(mins);
  document.getElementById('cd-sec').textContent  = pad(secs);
}

// Run immediately, then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ===========================
// SCROLL ANIMATION
// Cards fade in when you scroll to them
// ===========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply to all cards on the page
document.querySelectorAll('.about-card, .ql-card').forEach(card => {
  card.style.opacity   = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});