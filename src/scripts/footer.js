/* eslint-disable */
window.addEventListener('load', () => {
  const grafia = document.querySelector('.grafia-content');
  const market = document.querySelector('.market-content');
  const contacts = document.querySelector('.contacts-content');
  const projects = document.querySelector('.projects-content');
  const footerItem = document.querySelectorAll('.footer__subtitle');

  if (window.screen.width < '414') {
    footerItem.forEach(el => el.addEventListener('click', () => {
      switch (el.classList[1]) {
        case 'grafia':
            if (grafia.style.display === 'block') grafia.style.display = 'none'
            else grafia.style.display = 'block'
          break;
        case 'market':
          if (market.style.display === 'block') market.style.display = 'none'
          else market.style.display = 'block'
          break;
        case 'contacts':
          if (contacts.style.display === 'block') contacts.style.display = 'none'
          else contacts.style.display = 'block'
          break;
        case 'projects':
          if (projects.style.display === 'flex') projects.style.display = 'none'
          else projects.style.display = 'flex'
          break;
      }
    }))
  }
});
