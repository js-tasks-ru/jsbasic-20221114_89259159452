function initCarousel() {
   const carousel__inner = document.querySelector('.carousel__inner'),
         carousel__arrow_right = document.querySelector('.carousel__arrow_right'),
         carousel__arrow_left = document.querySelector('.carousel__arrow_left'),
         carousel__slide = document.querySelectorAll('.carousel__slide');

    let counter = 1;

    function check () {
      if (counter == carousel__slide.length) {
        carousel__arrow_right.style.display = 'none';
      } else {
        carousel__arrow_right.style.display = '';
      }
      if (counter == 1) {
        carousel__arrow_left.style.display = 'none';
      } else {
        carousel__arrow_left.style.display = '';
      }
    }
    check();
    let width = 0;
    carousel__arrow_right.addEventListener('click', ()=> {
      width -= carousel__inner.offsetWidth;
      carousel__inner.style.transform = `translateX(${width}px)`;
     
      counter+= 1;
      check();
    });
  
    carousel__arrow_left.addEventListener('click', ()=> {
        width = width + carousel__inner.offsetWidth;
        carousel__inner.style.transform = `translateX(${width}px)`;
        counter-=1; 
        check();
    });
  }