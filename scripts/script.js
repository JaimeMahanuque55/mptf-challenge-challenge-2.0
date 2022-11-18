var typed = new Typed('#typed', {
  strings: ["^2000 Seja bem vindo!", "O tenis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."],
  typeSpeed: 40
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 5500,
  reset: true
});

ScrollReveal().reveal('.header p', { delay: 150 });
ScrollReveal().reveal('.header h3', { delay: 350 });

ScrollReveal().reveal('#home .image', { delay: 150 });
ScrollReveal().reveal('#home .text', { delay: 650 });

ScrollReveal().reveal('#spotlight .text', { delay: 650 });

ScrollReveal().reveal('.shoe', { delay: 750 });
ScrollReveal().reveal('.footer', { delay: 750 });
