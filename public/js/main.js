const BannerNavigation = document.querySelector('.banner-navigation');
const offset = BannerNavigation.offsetTop;

window.addEventListener('scroll', () => {
  if(window.scrollY >= offset) {
    BannerNavigation.classList.add('fixed');
  } else {
    BannerNavigation.classList.remove('fixed');
  }
});

const link = document.getElementById('find-homestay');
const input = document.getElementById('location');

link.addEventListener('click', (e) => {
  e.preventDefault();
  input.focus();
});
