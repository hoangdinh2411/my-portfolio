const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const header = $('header')
const slideImg = $('.slide-img');
const slideImgBox = $('.slide-img-box')
window.onscroll = ()=>{
    var scrollTop = document.documentElement.scrollTop || window.scrollY;
    header.classList.toggle('active',scrollTop>250)
}