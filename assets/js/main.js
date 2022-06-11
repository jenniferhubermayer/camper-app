console.log("Hallo!")

console.log(document.querySelector("ul"))

function openMenu(){
    document.querySelector("ul").classList.remove("inactive");
    document.querySelector("ul").classList.add("active");
}

function closeMenu(){
    document.querySelector("ul").classList.remove("active");
    document.querySelector("ul").classList.add("inactive");
}