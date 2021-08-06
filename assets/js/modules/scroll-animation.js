export default function initAnimationScroll() {
  const sections = document.querySelectorAll('.js_scroll');
  if(sections.length){
    const windowScale = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowScale;
        if(sectionTop < 0) {
          section.classList.add('scrollActive');
        }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll)
  }
}


