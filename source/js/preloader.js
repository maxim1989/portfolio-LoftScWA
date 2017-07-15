document.addEventListener("DOMContentLoaded", function (e) {
    let body = document.getElementsByTagName("body"),
        preloader = document.querySelector(".preloader");

    window.addEventListener("load", function (e) {
        body[0].style.overflow = "auto";
        preloader.style.display = "none";
    })
});