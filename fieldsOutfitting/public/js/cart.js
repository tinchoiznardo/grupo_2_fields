window.addEventListener("load", function (){

    var price = document.querySelector(".priceContainer").innerText
    var quant = document.querySelector(".quantContainer").value
    var subtotal = document.querySelector(".subtotalContainer").innerText

    document.querySelector(".quantContainer").onchange = (e) => {
        subtotal = e.target.value * price
    }
    
    
    })