﻿//Anonymous function to change navbar color during scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('windowScroll',window.scrollY>0)
})

//Show or Hide Faq's
function toggleFunc(faq){
}
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')

        //change icon
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className==='uil uil-angle-down'){
            icon.className='uil uil-minus'
        }
        else{
            icon.className='uil uil-angle-down'
        }


    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//Hide/show nav
const menu=document.querySelector('.nav_menu')
const menuBtn=document.querySelector('#open-menu-btn')
const closeBtn=document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click',()=>{
        menu.style.display='flex'
        closeBtn.style.display='inline-block'
        menuBtn.style.display='none'
})

closeBtn.addEventListener('click',()=>{
    menu.style.display='none'
    menuBtn.style.display='inline-block'
    closeBtn.style.display='none'
})

