      //Loader //
var load=document.querySelector(".preload");
    window.addEventListener("load",function(){
        load.style.display="none";
})
     //Togelling open//

    function openn(){
        document.getElementById("menu").style.width="300px";
        document.querySelector(".main").style.visibility="hidden";
        document.querySelector(".nav_items").style.visibility="hidden";
       
   
    }
    //togelling close//
    function closee(){
        document.getElementById("menu").style.width="0px";
        document.querySelector(".main").style.visibility="visible";
        document.querySelector(".nav_items").style.visibility="visible";

       }
       var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}