(()=>{
  const VERSION='20260929classic2';
  document.querySelectorAll('link[href*="upgrade.css"]').forEach(l=>l.remove());
  const ensureCss=(href,key)=>{if(!document.querySelector(`link[href*="${key}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href+'?v='+VERSION;document.head.appendChild(l);}};
  ensureCss('classic-fixes.css','classic-fixes.css');

  const path=(location.pathname.split('/').pop()||'index.html').replace('.html','');
  document.body.classList.add('page-'+path);

  const replacements=[[/GAMING\s*&\s*CUSTOM/gi,'CUSTOM SYSTEMS & CNC'],[/AGAM GAMING/gi,'AGAM CUSTOM SYSTEMS'],[/מחשבי גיימינג/g,'מערכות מחשב'],[/עמדות גיימינג/g,'עמדות מחשב'],[/אביזרי גיימינג/g,'אביזרים וציוד היקפי']];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while(n=walker.nextNode()){let t=n.nodeValue;let next=t;for(const [re,to] of replacements)next=next.replace(re,to);if(next!==t)n.nodeValue=next;}
  document.title=document.title.replace(/GAMING\s*&\s*CUSTOM/gi,'CUSTOM SYSTEMS & CNC').replace(/מחשבי גיימינג/g,'מערכות מחשב');

  const header=document.querySelector('.top');
  const brandLink=header?.querySelector('a[href="index.html"]');
  if(brandLink){
    brandLink.innerHTML='<span class="brand"><img class="brand-mark" src="assets/agam-mark.png?v='+VERSION+'" alt="AGAM"><span><b class="brand-name">AGAM</b><small>פתרונות חכמים לבית ולעסק</small></span></span>';
    brandLink.removeAttribute('class');
  }

  const menu=header?.querySelector('.menu');
  if(menu){
    const links=[['index.html','דף הבית'],['tech.html','AGAM TECH'],['gaming.html','CUSTOM SYSTEMS & CNC'],['home.html','AGAM HOME'],['about.html','אודות'],['gallery.html','גלריה'],['contact.html','צור קשר']];
    menu.querySelectorAll('a').forEach(a=>{const m=links.find(([href])=>a.getAttribute('href')===href);if(m)a.textContent=m[1];});
  }

  document.querySelectorAll('img[src*="software-install.svg"]').forEach(img=>{img.src='assets/lab.jpg';img.alt='התקנת Windows, Office, Adobe ותוכנות';});
  document.querySelectorAll('img').forEach(img=>{if(!img.loading)img.loading='lazy';img.decoding='async';});

  const nav=header?.querySelector('.nav');
  if(nav&&!nav.querySelector('.mobile-icons')){
    nav.insertAdjacentHTML('beforeend','<div class="mobile-icons"><a class="w" href="https://wa.me/972559344185" aria-label="WhatsApp">✆</a><a class="p" href="tel:0559344185" aria-label="חיוג">☎</a></div>');
  }

  const menuBtn=document.querySelector('.hamb');
  if(menuBtn&&menu){
    menuBtn.setAttribute('aria-expanded','false');
    menuBtn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const open=menu.classList.toggle('open');menuBtn.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open));});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}));
    document.addEventListener('click',e=>{if(menu.classList.contains('open')&&!menu.contains(e.target)&&!menuBtn.contains(e.target)){menu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}});
  }

  document.querySelectorAll('.lead-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const txt=`שלום AGAM,%0Aשם: ${encodeURIComponent(d.get('name')||'')}%0Aטלפון: ${encodeURIComponent(d.get('phone')||'')}%0Aתחום: ${encodeURIComponent(d.get('service')||'')}%0Aאזור: ${encodeURIComponent(d.get('area')||'')}%0Aפירוט: ${encodeURIComponent(d.get('message')||'')}`;location.href='https://wa.me/972559344185?text='+txt;}));
})();