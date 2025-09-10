let container = document.querySelector(".container");
let form = document.querySelector(".form");
let input = document.querySelectorAll("input")

container.addEventListener("submit", function (e) {
    console.log(e)
    e.preventDefault()
    let card = document.createElement("div")
    card.classList.add("card")
    let profile = document.createElement("div")
    profile.classList.add("profile")
    let img = document.createElement("img")
    img.setAttribute("src", input[0].value);
    let h1 = document.createElement("h1");
    h1.textContent = (input[1].value)
    let h2 = document.createElement("h2");
    h2.textContent = (input[2].value)
    card.appendChild(profile)
    profile.appendChild(img)
    card.appendChild(h1)
    card.appendChild(h2)
    container.appendChild(card)

})