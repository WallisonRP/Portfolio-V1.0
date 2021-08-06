export default function initMenuMobile() {
  const linksInternos = document.querySelectorAll('.header_menu a[href^="#"');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior:'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })

}

