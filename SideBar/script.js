const btn = document.querySelector('.open-button');
const nav = document.querySelector('.sidebar');
 
btn.addEventListener('click', () => {
  nav.classList.toggle('sidebar-open');
  btn.classList.toggle('close-button'); 
  if (btn.value === '>>') {
    btn.value = '<<';
  } else {
    btn.value = '>>';
  }
});