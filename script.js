
(function(){
  const root=document.documentElement;
  const storedLang=localStorage.getItem('lrguide-lang')||'ar';
  const storedTheme=localStorage.getItem('lrguide-theme')||'dark';
  function applyLang(lang){
    root.setAttribute('data-lang',lang);root.setAttribute('dir',lang==='ar'?'rtl':'ltr');root.setAttribute('lang',lang);
    localStorage.setItem('lrguide-lang',lang);
    const b=document.getElementById('langToggle'); if(b){b.textContent=lang==='ar'?'EN':'ع';}
  }
  function applyTheme(theme){
    root.setAttribute('data-theme',theme); localStorage.setItem('lrguide-theme',theme);
    const b=document.getElementById('themeToggle'); if(b){b.textContent=theme==='dark'?'Light':'Dark';}
  }
  document.addEventListener('click',function(e){
    const langBtn=e.target.closest('#langToggle'); const themeBtn=e.target.closest('#themeToggle'); const tabBtn=e.target.closest('.tab-btn');
    if(langBtn){applyLang((root.getAttribute('data-lang')||'ar')==='ar'?'en':'ar');}
    if(themeBtn){applyTheme((root.getAttribute('data-theme')||'dark')==='dark'?'light':'dark');}
    if(tabBtn){
      const wrapper=tabBtn.closest('[data-tabs]'); if(!wrapper) return;
      wrapper.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      wrapper.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      tabBtn.classList.add('active');
      const panel=wrapper.querySelector('#'+tabBtn.getAttribute('data-target')); if(panel) panel.classList.add('active');
    }
  });
  document.addEventListener('DOMContentLoaded',function(){applyLang(storedLang); applyTheme(storedTheme);});
})();
