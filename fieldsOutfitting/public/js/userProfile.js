window.addEventListener ('load', function(){
    var clicks = document.querySelector(".glyphicon glyphicon-user");

    clicks.onclick = function(){
        document.querySelector(".profile-reclaims").style.display = 'none';
        document.querySelector(".profile-information").style.display = "visible";
    }


})