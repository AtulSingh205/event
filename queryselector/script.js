// listi text color even form red only
let ul = document.querySelectorAll("ul li:nth-child(2n)")
console.log(ul)
ul.forEach(function(elem){
    elem.classList.add("heighliter")
})
