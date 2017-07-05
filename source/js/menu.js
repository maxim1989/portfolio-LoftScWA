$(document).ready(function () {
    let menu = document.querySelector(".burger.burger_type_menu"),
        close = document.querySelector(".modal__close-link"),
        body = document.getElementsByTagName("body"),
        setStyle = function (styleOne, styleTwo, hideScroll) {
            let modal = document.querySelector(".modal");
            menu.style.display = styleOne;
            modal.style.display = styleTwo;
            body[0].style.overflow = hideScroll;
        };

    if (menu) {
        menu.addEventListener("click", function (e) {
            setStyle("none", "block", "hidden");
        });
        close.addEventListener("click", function (e) {
            setStyle("block", "none", "auto");
        })
    }
});
