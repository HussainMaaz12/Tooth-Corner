/**
 * The Dental Center — main.js
 * Handles: Navigation, Scroll effects, FAQ, Animations, Counter
 */

'use strict';

/* ─── Header Scroll Effect ─── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
}, { passive: true });

/* ─── Mobile Menu Toggle ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
  document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});
mobileClose?.addEventListener('click', closeMobileMenu);

mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMobileMenu);
});

function closeMobileMenu() {
  mobileMenu?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Active Nav Link on Scroll ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 100) current = section.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });

/* ─── Scroll Reveal Animation ─── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ─── FAQ Accordion ─── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item?.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) item?.classList.add('open');
  });
});

/* ─── Counter Animation ─── */
function animateCounter(el, target, duration = 2000) {
  const start = performance.now();
  const startValue = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startValue + (target - startValue) * eased);
    el.textContent = current.toLocaleString('en-IN') + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ─── Smooth scroll for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── Sticky Appointment Button Visibility ─── */
const stickyAppt = document.querySelector('.sticky-appt');
window.addEventListener('scroll', () => {
  if (stickyAppt) {
    stickyAppt.style.opacity = window.scrollY > 300 ? '1' : '0';
    stickyAppt.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
  }
}, { passive: true });

/* ─── Appointment Form Handling ─── */
const apptForm = document.getElementById('appointment-form');
apptForm?.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(apptForm);
  const data = Object.fromEntries(formData);

  // In production: replace with actual API call
  console.log('Appointment request:', data);

  const btn = apptForm.querySelector('[type="submit"]');
  if (btn) {
    btn.textContent = '✓ Request Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = 'Book Appointment';
      btn.style.background = '';
      apptForm.reset();
    }, 3000);
  }
});

/* ─── Phone Number Click Tracking (Analytics hook) ─── */
document.querySelectorAll('a[href^="tel:"]').forEach(a => {
  a.addEventListener('click', () => {
    // Replace with your analytics call e.g., gtag('event', 'phone_click', {...})
    console.log('Phone click tracked');
  });
});
