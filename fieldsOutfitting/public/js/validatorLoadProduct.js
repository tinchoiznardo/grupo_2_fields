window.addEventListener("load", function (){
//Validacion de Creacion de producto

var prodName = document.querySelector("#productName")
var prodDescription = document.querySelector(".productDescription")


prodName.addEventListener("blur", () => {
    if (prodName.value.length < 5) {
        prodName.style.borderColor = "red"
        prodName.value = "Must be 5 characters minimum";
        prodName.value.style.color = "red";
    }else {
        prodName.style.borderColor = ""
    }
  });

  prodDescription.addEventListener("blur", () => {
    if (prodDescription.value.length < 20) {
        prodDescription.style.borderColor = "red"
        prodDescription.value = "Must be 20 characters minimum";
        prodDescription.value.style.color = "red"
    }else {
        prodDescription.style.borderColor = ""
    }
  });

})