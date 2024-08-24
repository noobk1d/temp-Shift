'use strict';

//Modal

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const btnScroll = document.querySelector('.btn--scroll-to');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//Message

const header = document.querySelector('header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved user experience. 
                     <button class="btn btn--close-cookie">Got it</btn>`;
header.prepend(message);

//Button Smooth Scrolling

btnScroll.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page Navigation
const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Component(Operations)

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;

  //Removing classes
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((t) => t.classList.remove('operations__content--active'));

  //Adding classes
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    console.log(siblings.length);
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach((el) => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation

// const initCoord = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initCoord.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//Sticy Navigation using Interection Observer Api

// const header = document.querySelector('.header');

//Callback function
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
//Api

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);
