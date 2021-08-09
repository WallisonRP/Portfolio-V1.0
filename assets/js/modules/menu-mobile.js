import outsideClick from "./outsideclick.js"

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if(menuButton) {
    function openMenu(event) {
      if (event.type === 'touchstart') event.preventDefault();
      menuList.classList.add('active');
      menuButton.classList.add('active');
      const activeMenu = menuList.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', activeMenu)
      console.log(activeMenu)
      
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
        
      })
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    })
  }
}


