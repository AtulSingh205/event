let h1=document.querySelector("h1")
let isred=true;
h1.addEventListener("click",function(){

   if(isred){
     h1.style.color="red"
     isred=false
   } 
   else {
    h1.style.color="black"
    isred=true
   }
})