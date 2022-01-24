var load=document.querySelector(".preload");
    window.addEventListener("load",function(){
        load.style.display="none";
})
    function openn(){
        document.getElementById("menu").style.width="300px";
        document.querySelector(".main").style.visibility="hidden";
        document.querySelector(".nav_items").style.visibility="hidden";
       
   
    }
    function closee(){
        document.getElementById("menu").style.width="0px";
        document.querySelector(".main").style.visibility="visible";
        document.querySelector(".nav_items").style.visibility="visible";

       }