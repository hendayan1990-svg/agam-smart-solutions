const menuBtn=document.querySelector('.hamb');
const menu=document.querySelector('.menu');
if(menuBtn&&menu){
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    menuBtn.classList.toggle('open',open);
    menuBtn.setAttribute('aria-expanded',String(open));
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
  document.addEventListener('click',e=>{if(menu.classList.contains('open')&&!menu.contains(e.target)&&!menuBtn.contains(e.target)){menu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
}
document.querySelectorAll('.lead-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const txt=`שלום AGAM,%0Aשם: ${encodeURIComponent(d.get('name')||'')}%0Aטלפון: ${encodeURIComponent(d.get('phone')||'')}%0Aתחום: ${encodeURIComponent(d.get('service')||'')}%0Aאזור: ${encodeURIComponent(d.get('area')||'')}%0Aפירוט: ${encodeURIComponent(d.get('message')||'')}`;location.href='https://wa.me/972559344185?text='+txt;}));