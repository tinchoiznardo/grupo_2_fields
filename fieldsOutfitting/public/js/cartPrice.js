window.addEventListener("load", function (){
    
    var price = document.querySelector(".productPrice")
    var quantity = document.querySelector(".productQuantity")
    console.log(price);
    
    var subtotal = parseInt(price)*parseInt(quantity)

    
    document.querySelector(".subtotal").innerHTML = subtotal

    console.log("cosas");
    console.log(price);
    console.log(quantity);
    })