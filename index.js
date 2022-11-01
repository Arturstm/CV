import * as lang from './js/translate.js'

(function () {
    var square = document.querySelector('.card-avatar');
    var square1 = document.querySelector('.about-card');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('card-avatar-animation');
          square1.classList.add('about-card-animation');
        }
      });
    });
  
    observer.observe(square,square1);
  })();

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))