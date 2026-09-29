(()=>{
  const VERSION='20260929pro4';
  if(!document.querySelector('link[href*="mobile-final.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='mobile-final.css?v='+VERSION;document.head.appendChild(l);}
  if(!document.querySelector('link[href*="upgrade.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='upgrade.css?v='+VERSION;document.head.appendChild(l);}
  document.body.classList.add('agam-pro');
  const path=(location.pathname.split('/').pop()||'index.html').replace('.html','');
  document.body.classList.add('page-'+path);
  document.title=document.title.replace(/GAMING\s*&\s*CUSTOM/gi,'CUSTOM SYSTEMS & CNC').replace(/מחשבי גיימינג/g,'מערכות מחשב');

  const header=document.querySelector('.top');
  const oldBrand=header?.querySelector('.brand:not(.brand-full)');
  if(oldBrand){oldBrand.className='brand brand-full';oldBrand.innerHTML='<img src="assets/agam-logo.png?v='+VERSION+'" alt="AGAM">';}
  document.querySelectorAll('.brand-full img').forEach(img=>{img.src='assets/agam-logo.png?v='+VERSION;});
  document.querySelectorAll('img[src*="software-install.svg"]').forEach(img=>{img.src='assets/lab.jpg';img.alt='התקנת Windows ותוכנות';});

  const nav=header?.querySelector('.nav');
  if(nav&&!nav.querySelector('.mobile-icons')){nav.insertAdjacentHTML('beforeend','<div class="mobile-icons"><a class="w" href="https://wa.me/972559344185" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z"/><path d="M8.7 8.2c.3-.3.7-.2.9.2l.8 1.7c.1.3.1.5-.1.8l-.5.7c.7 1.3 1.7 2.3 3 3l.7-.5c.2-.2.5-.2.8-.1l1.7.8c.4.2.5.6.2.9-.5.7-1.2 1-2.1 1-3.4-.3-6.6-3.5-6.9-6.9 0-.7.4-1.3 1.5-1.6Z"/></svg></a><a class="p" href="tel:0559344185" aria-label="חיוג"><svg viewBox="0 0 24 24"><path d="M6.8 3.5 9.2 3c.5-.1 1 .2 1.2.7l1.1 2.8c.2.4.1.8-.2 1.1L9.8 9c1.1 2.2 2.9 4 5.1 5.1l1.4-1.5c.3-.3.7-.4 1.1-.2l2.8 1.1c.5.2.8.7.7 1.2l-.5 2.4c-.2 1-1.1 1.7-2.1 1.7C10.9 18.5 5.5 13.1 5.1 5.7c0-1 .7-1.9 1.7-2.2Z"/></svg></a></div>');}

  const replacements=[[/GAMING\s*&\s*CUSTOM/gi,'CUSTOM SYSTEMS & CNC'],[/AGAM GAMING/gi,'AGAM CUSTOM SYSTEMS'],[/מחשבי גיימינג/g,'מערכות מחשב'],[/עמדות גיימינג/g,'עמדות מחשב'],[/אביזרי גיימינג/g,'אביזרים וציוד היקפי']];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while(n=walker.nextNode()){let t=n.nodeValue;let next=t;for(const [re,to] of replacements)next=next.replace(re,to);if(next!==t)n.nodeValue=next;}

  const menuBtn=document.querySelector('.hamb');
  const menu=document.querySelector('.menu');
  if(menuBtn&&menu){
    menuBtn.setAttribute('aria-expanded','false');
    menuBtn.addEventListener('click',e=>{e.stopPropagation();const open=menu.classList.toggle('open');menuBtn.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open));});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
    document.addEventListener('click',e=>{if(menu.classList.contains('open')&&!menu.contains(e.target)&&!menuBtn.contains(e.target)){menu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
  }

  document.querySelectorAll('.lead-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const txt=`שלום AGAM,%0Aשם: ${encodeURIComponent(d.get('name')||'')}%0Aטלפון: ${encodeURIComponent(d.get('phone')||'')}%0Aתחום: ${encodeURIComponent(d.get('service')||'')}%0Aאזור: ${encodeURIComponent(d.get('area')||'')}%0Aפירוט: ${encodeURIComponent(d.get('message')||'')}`;location.href='https://wa.me/972559344185?text='+txt;}));
})();