window.addEventListener("load", function (){

var classics = document.querySelectorAll(".fields")
var walkers = document.querySelectorAll(".walkers")


document.querySelector("#classicFilter").onclick = function(){
    walkers.forEach(prod => prod.style.display = "none")
    classics.forEach(prod => prod.style.display = "block")

    console.log("FUNCA")
}

document.querySelector("#walkersFilter").onclick = function(){
    classics.forEach(prod => prod.style.display = "none")
    walkers.forEach(prod => prod.style.display = "block")

    console.log(classics)
}
document.querySelector("#allFilter").onclick = function(){
    classics.forEach(prod => prod.style.display = "block")
    walkers.forEach(prod => prod.style.display = "block")

    console.log(classics)
}
})