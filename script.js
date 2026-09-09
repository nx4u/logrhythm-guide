
const html = document.documentElement;
const langBtn = document.getElementById('langToggle');
const themeBtn = document.getElementById('themeToggle');

function setLang(lang){
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('lr-lang', lang);
  if(langBtn) langBtn.textContent = lang === 'ar' ? 'EN / ع' : 'ع / EN';
}
function setTheme(light){
  html.classList.toggle('light', light);
  localStorage.setItem('lr-theme', light ? 'light' : 'dark');
  if(themeBtn) themeBtn.textContent = light ? 'Dark' : 'Light';
}
setLang(localStorage.getItem('lr-lang') || 'ar');
setTheme(localStorage.getItem('lr-theme') === 'light');
langBtn?.addEventListener('click', () => setLang(html.lang === 'ar' ? 'en' : 'ar'));
themeBtn?.addEventListener('click', () => setTheme(!html.classList.contains('light')));

document.querySelectorAll('.filterbar').forEach(bar => {
  const target = document.getElementById(bar.dataset.target);
  bar.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      target?.querySelectorAll('[data-tags]').forEach(card => {
        const tags = (card.dataset.tags || '').split(' ');
        card.style.display = filter === 'all' || tags.includes(filter) ? '' : 'none';
      });
    });
  });
});

document.querySelectorAll('[data-search]').forEach(input => {
  const target = document.getElementById(input.dataset.search);
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    target?.querySelectorAll('[data-searchtext]').forEach(el => {
      el.style.display = !q || el.dataset.searchtext.toLowerCase().includes(q) ? '' : 'none';
    });
  });
});

document.querySelectorAll('.acc').forEach(btn => {
  btn.addEventListener('click', () => btn.nextElementSibling?.classList.toggle('open'));
});
