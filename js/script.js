//Anonymous function to change navbar color during scroll
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
