$(document).ready(function () {
    let image = document.querySelector(".wrapper-hello>.bg-forest"),
        startX = -550,
        startY = -600,
        wrapper = document.querySelector(".wrapper-hello");
    if (wrapper) {
        wrapper.addEventListener('mousemove', function (e) {
            let initialX = (window.innerWidth / 2) - e.pageX,
                initialY = (window.innerHeight / 2) - e.pageY,
                newX = startX + initialX / 1000,
                newY = startY + initialY / 1000;
            if (newX <= -250 && -850 <= newX) {
                startX = startX + initialX / 1000;
            }
            if (newY <= -300 && -900 <= newY) {
                startY = startY + initialY / 1000;
            }
            image.style.transform = "translate(" + startX + "px, " + startY + "px)";
        });
    }
});