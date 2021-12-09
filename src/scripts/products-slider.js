window.addEventListener('load', () => {
  let slideIndex = 1;
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  showSlides(slideIndex);

  if (window.screen.width < '900') {
    setInterval(() => {
      showSlides(slideIndex += 1);
    }, 5000);
  }

  prev.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
  });

  next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
  });

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('item');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }
});
