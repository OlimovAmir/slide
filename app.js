var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



if (matchMedia) {
  let screen = window.matchMedia("(max-width:500px)");
  screen.addListener(changes);
  changes(screen);
}

function changes(screen) {
  
  
  if (screen.matches) {
    
    document.querySelector('.footer').classList.add('hidden');
    
  } else {
    
    document.querySelector('.footer').classList.remove('hidden');
    
  }



}