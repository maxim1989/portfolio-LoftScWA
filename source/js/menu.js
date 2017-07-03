$(document).ready(function () {
    let menu = document.querySelector(".burger.burger_type_menu"),
        close = document.querySelector(".modal__close-link"),
        setStyle = function (styleOne, styleTwo) {
            let modal = document.querySelector(".modal");
            menu.style.display = styleOne;
            modal.style.display = styleTwo;
        };

    if (menu) {
        menu.addEventListener("click", function (e) {
            setStyle("none", "block");
        });
        close.addEventListener("click", function (e) {
            setStyle("block", "none");
        })
    }
});
