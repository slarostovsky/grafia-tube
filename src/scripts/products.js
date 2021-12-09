window.addEventListener('load', () => {
  const images = document.querySelectorAll('.products__item');

  images.forEach((el) => el.addEventListener('mouseenter', () => toggleClassImage(el)));
  images.forEach((el) => el.addEventListener('mouseleave', () => toggleClassImage(el)));

  function toggleClassImage(el) {
    el.classList.toggle('img-active');
  }
});

