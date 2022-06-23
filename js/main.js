const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      dots = document.querySelectorAll('.dot'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
  for ( let slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for ( let dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareActiveSlide = ind => {
  activeDot(index);
  activeSlide(index);
  clearTimeout(timerId);
}

const nextSlide = () => {
  if (index == slides.length - 1) {
     index = 0;
    prepareActiveSlide(index);
  }else {
     index++;
    prepareActiveSlide(index);
  }
  timerId = setTimeout(nextSlide, 2000);
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareActiveSlide(index);
  }else {
    index--;
    prepareActiveSlide(index);
  }
  timerId = setTimeout(nextSlide, 2000);
}

dots.forEach((item, indexDot) =>{
  item.addEventListener('click', () => {
    index = indexDot;
    prepareActiveSlide(index);
    timerId = setTimeout(nextSlide, 2000);
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


let timerId = setTimeout(nextSlide, 2000);



