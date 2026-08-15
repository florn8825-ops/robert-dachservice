document.addEventListener('DOMContentLoaded',function(){
  const toggle=document.querySelector('.rd-mobile-toggle');
  const nav=document.getElementById('rd-mobile-nav');
  const servicesToggle=document.querySelector('.rd-mobile-services-toggle');
  const services=document.querySelector('.rd-mobile-services');
  if(toggle&&nav){toggle.addEventListener('click',function(){const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Menü öffnen':'Menü schließen');toggle.classList.toggle('is-open',!open);nav.hidden=open;document.body.style.overflow=open?'':'hidden';});}
  if(servicesToggle&&services){servicesToggle.addEventListener('click',function(){const open=servicesToggle.getAttribute('aria-expanded')==='true';servicesToggle.setAttribute('aria-expanded',String(!open));services.hidden=open;});}
  document.querySelectorAll('.rd-mobile-nav a').forEach(function(link){link.addEventListener('click',function(){if(toggle&&nav){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Menü öffnen');toggle.classList.remove('is-open');nav.hidden=true;document.body.style.overflow='';}});});
});
