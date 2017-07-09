$(document).ready(function () {
    let blur = (function () {
        let blurWrapper = document.querySelector(".blur-wrapper"),
            contactForm = document.querySelector(".contact-form");

        return {
            set: function () {
                let imageWidth = document.querySelector(".bg-stones").offsetWidth,
                    posLeft = -blurWrapper.offsetLeft,
                    posTop = -blurWrapper.offsetTop,
                    blurCSS = contactForm.style;
                blurCSS.backgroundSize = imageWidth + " px " + "auto";
                blurCSS.backgroundPosition = posLeft + "px " + posTop + "px";
            }
        }
    }());

    if (document.querySelector(".bg-stones")) {
        blur.set();

        window.onresize = function (e) {
            blur.set();
        }
    }

});