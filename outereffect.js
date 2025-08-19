let progress = document.getElementById('progressbar');
 let totalHeight = document.body.scrollHeight - window.innerHeight;
 window.onscroll = function()
 {
   let progressHeight = (window.pageYOffset / totalHeight) * 100;
   progress.style.height = progressHeight + "%";
 }
 
 var ttn = document.getElementsByClassName("ttn");
 var banner = document.getElementById("banner"); 
 ttn[0].onclick = function()
 {
     banner.src = "./images/pic3.png";
     animation();
     this.classList.add("activel1");
    
 
 }
  
 ttn[1].onclick = function()
 {
     banner.src = "./images/pic2.png";
     animation();
     this.classList.add("activel1");
 }
  
 ttn[2].onclick = function()
 {
     banner.src = "./images/pic1.png";
     animation();
     this.classList.add("activel1");
 }
 
 function animation(){
     banner.classList.add("zoom");
     setTimeout(function(){
         banner.classList.remove("zoom");
          },500);
 
          for (b of ttn){
              b.classList.remove("activel1");
          }
 }
 



 window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})