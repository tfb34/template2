var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 /* for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";  
 /* dots[slideIndex-1].className += " active";*/
}

/*mobile*/
function scrollToSection(id){
  let el = document.getElementById(id)
  el.scrollIntoView({behavior:"smooth", block: "start"});
  toggleMenu();
}

/*desktop*/
function scrollTo(id){
  let el = document.getElementById(id)
  el.scrollIntoView({behavior:"smooth", block: "start"});

}

function sayHello(){
  console.log("hello");
}

const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('menu-btn');
const body = document.getElementsByTagName('body')[0];
function toggleMenu(){
  mobileMenu.classList.toggle("hide");
  menuBtn.classList.toggle("change");
  body.classList.toggle("disable-scrolling");
}

/*NEW */
function updateLinkCSS(id){
  
   let el2 = document.getElementsByClassName(currentID)[1];
  el2.classList.toggle("active");

  let el4 = document.getElementsByClassName(id)[1];
  el4.classList.toggle("active");
/*  console.log(el2);*/
  currentID = id;
}

let currentID = 'home';
let menuItems = ['home','about','services','gallery','contact'];
const titleNavbar = document.getElementsByTagName('nav')[0];
const scrollingNavbar = document.getElementsByTagName('nav')[1];

window.addEventListener('scroll', function(e){
/*  console.log("hello");
  console.log("scrolling");*/
  newID = document.elementFromPoint(0,85).id;
/*  console.log("newId ="+newID);*/

  if(currentID != newID && menuItems.includes(newID)){
    updateLinkCSS(newID);
  }

  if(window.innerWidth >= 1024 && window.pageYOffset > 80){
      titleNavbar.classList.add('hide');
      scrollingNavbar.classList.remove('hide');

  }else{
    titleNavbar.classList.remove('hide');
    scrollingNavbar.classList.add('hide');
  }
  /*if(id != ""){
    updateLinkCSS(id);
  }*/
});