import outsideClick from "./outsideclick.js"

export default function initEffect() {
  function textArray(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
      setTimeout(() => element.innerHTML += letter, 75 * i);
    });

  }

  const tittle = document.querySelector('.header_tittle');
  textArray(tittle);
}


