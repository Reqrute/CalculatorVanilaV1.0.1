const themeSwitcher = document.getElementById('themeSwitcher');

function setTheme(isLight) {
  document.body.classList.toggle('light-theme', isLight);
  themeSwitcher.checked = isLight;
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isLight = savedTheme === 'light';
  setTheme(isLight);
});

themeSwitcher.addEventListener('change', () => {
  const isLight = themeSwitcher.checked;
  setTheme(isLight);
});
