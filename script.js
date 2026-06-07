const menuBtn=document.querySelector('.menu-btn');const navLinks=document.querySelector('.nav-links');menuBtn.addEventListener('click',()=>navLinks.classList.toggle('active'));document.querySelectorAll('.accordion button').forEach(btn=>{btn.addEventListener('click',()=>{btn.nextElementSibling.classList.toggle('open')})});
const slides=[...document.querySelectorAll('.slide')];
const geometryStats=document.getElementById('geometryStats');
const slideCitation=document.getElementById('slideCitation');
let current=0;
function showSlide(i){
    slides[current].classList.remove('active');

  current=(i+slides.length)%slides.length;

  slides[current].classList.add('active');

  if(slides[current].src.includes('page2_img1.png')){
    geometryStats.style.display='grid';
  }else{
    geometryStats.style.display='none';
  }

  if(slides[current].classList.contains('citation-slide')){
    slideCitation.style.display='block';
    }else{
    slideCitation.style.display='none';
    }
}

showSlide(0);
document.querySelector('.next').addEventListener('click',()=>showSlide(current+1));
document.querySelector('.prev').addEventListener('click',()=>showSlide(current-1));
setInterval(()=>showSlide(current+1),7000);
document.querySelectorAll('.modal-trigger').forEach(btn=>btn.addEventListener('click',()=>document.getElementById(btn.dataset.modal).classList.add('active')));
document.querySelectorAll('.modal,.close-modal').forEach(el=>el.addEventListener('click',e=>{if(e.target.classList.contains('modal')||e.target.classList.contains('close-modal'))document.querySelectorAll('.modal').forEach(m=>m.classList.remove('active'))}));
