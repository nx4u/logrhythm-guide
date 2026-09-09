
(function(){
 const root=document.documentElement;
 function setLang(l){root.setAttribute('data-lang',l);root.setAttribute('dir',l==='ar'?'rtl':'ltr');root.setAttribute('lang',l);localStorage.setItem('lr-v6-lang',l);let b=document.getElementById('langToggle');if(b)b.textContent=l==='ar'?'EN':'ع'}
 function setTheme(t){root.setAttribute('data-theme',t);localStorage.setItem('lr-v6-theme',t);let b=document.getElementById('themeToggle');if(b)b.textContent=t==='dark'?'Light':'Dark'}
 document.addEventListener('click',e=>{
   const lb=e.target.closest('#langToggle'),tb=e.target.closest('#themeToggle'),tab=e.target.closest('.tab-btn');
   if(lb)setLang((root.getAttribute('data-lang')||'ar')==='ar'?'en':'ar');
   if(tb)setTheme((root.getAttribute('data-theme')||'dark')==='dark'?'light':'dark');
   if(tab){const w=tab.closest('[data-tabs]');if(!w)return;w.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));w.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');const p=w.querySelector('#'+tab.dataset.target);if(p)p.classList.add('active')}
 });
 document.addEventListener('DOMContentLoaded',()=>{
   setLang(localStorage.getItem('lr-v6-lang')||'ar');setTheme(localStorage.getItem('lr-v6-theme')||'dark');
   document.querySelectorAll('img[data-fallback]').forEach(img=>{img.addEventListener('error',()=>{img.src=img.dataset.fallback},{once:true})});
 });
})();
