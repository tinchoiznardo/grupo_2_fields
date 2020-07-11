window.addEventListener("load", function (){
    var form = document.querySelector ("#form")
    var name = document.querySelector ("#name")
    var lastName = document.querySelector ("#lastname")
    var mail = document.querySelector ("#email")
    var password = document.querySelector ("#password")
    var repassword = document.querySelector ("#re-password")
    // var image = document.querySelector (".image")
    var errors = [] ; 


    form.onsubmit = function (e) {
        if (name.value.length < 3){
            errors.push ("El campo debe contener mas de dos caracteres")
        }
        if (lastName.value.length < 3){
            errors.push ("El campo debe contener mas de dos caracteres")
        }
        // if (mail.value.length < 9){
        //     errors.push ("El campo debe contener mas de ocho caracteres")
        // }
        if (password.value.length < 9){
            errors.push ("El campo debe contener mas de ocho caracteres")
        }
        // if (image == ".JPG", ".JPEG", ".PNG" , ".GIF"){
        //     errors.push ("El formato debe ser alguno de los siguientes: .JPG, .JPEG, .PNG , .GIF")
        // }
        if (errors.length > 0) {
            e.preventDefault ()
            var ulErrors = document.querySelector ( "div.errorFront ul")
            for (let i= 0; i < errors.length ; i++){
                ulErrors.innerHTML += "<li>" + errors [i]+ "</li>";
            }
        errors = [];
        }
    }





})