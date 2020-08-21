window.addEventListener ('load', function(){

    var clientInfo = document.querySelector(".profile-information");
    var reclaims = document.querySelector(".profile-reclaims");

    document.querySelector(".p-info").onclick = function () {
        clientInfo.style.display = "block",
        reclaims.style.display = "none"
    }

    document.querySelector(".p-reclaim").onclick = function () {
       clientInfo.style.display = "none",
       reclaims.style.display = "block"
    }
})