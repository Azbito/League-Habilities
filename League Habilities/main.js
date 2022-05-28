/*---- open/close menu when clicking on icon ---- */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/* when clicking on a menu item, hide the menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

const buttonalert = document.querySelectorAll('.button')

/*-- click on any button --*/

for (const buttons of buttonalert) {
  buttons.addEventListener('click', () => {
    window.alert('Site em desenvolvimento')
  })
}

/*------*/

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* testimonials swiper */

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  slidePerView: 1,
  scrollbar: {
    el: '.swiper-scrollbar'
  },

  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scroll reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* back to top button */

function backToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top')

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

/* when scrolling */

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTopButton()
  activateMenuAtCurrentSection()
})

/* Checkpoints */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (windows.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionID + ']')
        .classList.add('activate')
    } else {
      document
        .querySelector('nav ul li a[href*=' + secionId + ']')
        .classList.remove('activate')
    }
  }
}
