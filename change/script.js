let sel = document.querySelector("select")
let device=document.querySelector("h1")
sel.addEventListener("change",function(evt){
    device.textContent=`${evt.target.value} is selected`
    console.log(evt.target.value)
})