// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// })

var fixed = document.querySelector("#fixed");
var elemc = document.querySelector(".elems");

elemc.addEventListener("mouseenter",function(){
  fixed.style.display = "block";
})

elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
  })

var elem1 = document.querySelectorAll(".elem")
elem1.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
  })
  
})

function swiperAnimation() {
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
swiperAnimation()


var mennu = document.querySelector("nav h3");
var full = document.querySelector(".full-scn")
var navimg = document.querySelector("nav img")
var flag = 0;

if(flag == 0){mennu.addEventListener("click", function(){
    full.style.top = 0
    navimg.style.opacity = 0
    flag = 1
})}else{
  mennu.addEventListener("click", function(){
  full.style.backgroundColor = "black"
  navimg.style.opacity = 1
  flag = 0
})}

var loader = document.querySelector(".loader");
setTimeout(() => {
  loader.style.top = "-100%"
}, 4000);
