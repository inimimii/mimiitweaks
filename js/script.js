const toggleBtn = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('menu-close');
const menu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
});
