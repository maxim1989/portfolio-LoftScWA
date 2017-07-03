$(document).ready(function () {
    let about = document.querySelector(".wrapper-about>.header-about"),
        blog = document.querySelector(".wrapper-blog>.header-blog"),
        work = document.querySelector(".wrapper-work>.header-about"),
        startX = -550,
        startY = -600;

    if (about) {
        let image = document.querySelector(".header-about>.bg-forest");
        window.addEventListener("scroll", function (e) {
            let pageOffsetY = window.pageYOffset,
                newY = startY - pageOffsetY / 5;
            if (newY >= -900) {
                image.style.transform = "translate(" + startX + "px, " + newY + "px)";
            }
        })
    }

    if (blog) {
        let image = document.querySelector(".header-blog>.bg-forest");
        window.addEventListener("scroll", function (e) {
            let pageOffsetY = window.pageYOffset,
                newY = startY - pageOffsetY / 5;
            if (newY >= -900) {
                image.style.transform = "translate(" + startX + "px, " + newY + "px)";
            }
        })
    }

    if (work) {
        let image = document.querySelector(".header-about>.bg-forest");
        window.addEventListener("scroll", function (e) {
            let pageOffsetY = window.pageYOffset,
                newY = startY - pageOffsetY / 5;
            if (newY >= -900) {
                image.style.transform = "translate(" + startX + "px, " + newY + "px)";
            }
        })
    }
});