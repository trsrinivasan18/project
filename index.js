      //Loader// 
var load=document.querySelector(".preload");
    window.addEventListener("load",function(){
        
        setTimeout(()=>load.style.display="none",2000)
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

       //main Image slider
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
//search movies

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//option to value store
function selec(){
    var drop=document.getElementById("dropdown");
    var text=drop.options[drop.selectedIndex].text;
    document.getElementById("my").value=text;
}
//searchbar movies
function sear(){
var looi=document.getElementById("myUL");
var clo=document.getElementById("close");
var ser=document.getElementById("search");
  if(looi.style.display==='none'){
    ser.style.display='none';
    looi.style.display='block';
    clo.style.display='inline';
  //  closebtn.style.cursor='pointer';
 }
  else{
    looi.style.display='none';
    clo.style.display='none';
    ser.style.display='inline';

  }
}
//searchbar closebtn
function thebtn(){
  var listed=document.getElementById("myUL");
  var bar=document.getElementById("search");
  var closebtn=document.getElementById("close");
  var lis = listed.getElementsByTagName("li");
  var soon=document.getElementById("myInput");
 listed.style.display='none';
 bar.style.display='inline';
 closebtn.style.display='none';
 
 soon.style.display='inline';
 if(lis.style.display='none'){
   lis.style.display='inline';
   
 }
 else{
  lis.style.display='none';
   }
}


var act=[...document.querySelectorAll("#home")];
console.log(act);
act.forEach(ele=>{
ele.addEventListener('click',(e)=>{
  console.log(e);
  e.style.backgroundColor="red";
})

})
