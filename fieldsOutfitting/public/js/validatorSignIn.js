window.addEventListener("load", function (){

//Validacion de Sign In

    var name = document.querySelector ("#name")
    var lastName = document.querySelector ("#lastname")
    var password = document.querySelector ("#password")
    var repassword = document.querySelector ("#re-password")
    // var image = document.querySelector (".image")
    var errors = [] ; 

    name.addEventListener("blur", () => {
        if (name.value.length < 3) {
            name.style.borderColor = "red"
            name.value = "Must be 3 characters minimum";
            name.value.style.color = "red"
        }else {
            name.style.borderColor = ""
        }
      });

      lastName.addEventListener("blur", () => {
        if (lastName.value.length < 3) {
            lastName.style.borderColor = "red"
            lastName.value = "Must be 3 characters minimum";
            lastName.value.style.color = "red"
        }else {
            lastName.style.borderColor = ""
        }
      });

      password.addEventListener("blur", () => {
        if (password.value.length < 6) {
            password.style.borderColor = "red"
            var passwordError = document.querySelector(".errorpassword")
            passwordError.innerHTML = "Must be 6 characters minimum" 
            password.value.style.color = "red"
        }else {
            password.style.borderColor = ""
            var passwordError = document.querySelector(".errorpassword")
            passwordError.innerHTML = ""
        }
      });

      repassword.addEventListener("blur", () => {
        if (repassword.value != password.value) {
            repassword.style.borderColor = "red"
            var RePasswordError = document.querySelector(".errorRepassword")
            RePasswordError.innerHTML = "Passwords dont match" 
            repassword.value.style.color = "red"
        }else {
            repassword.style.borderColor = ""
            var RePasswordError = document.querySelector(".errorRepassword")
            RePasswordError.innerHTML = "" 
            
        }
      });


    

})