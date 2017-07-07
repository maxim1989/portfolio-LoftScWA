$(document).ready(function () {
    let block = {
        menu: document.querySelector(".burger.burger_type_menu"),
        close: document.querySelector(".modal__close-link"),
        body: document.getElementsByTagName("body"),
        modal: document.querySelector(".modal"),
        hide: function () {
            this.menu.style.display = "none";
            this.modal.style.display = "block";
            this.body[0].style.overflow = "hidden";
            },
        show: function () {
            this.menu.style.display = "block";
            this.modal.style.display = "none";
            this.body[0].style.overflow = "auto";
            }
        };

    if (block.menu) {
        block.menu.addEventListener("click", function (e) {
            block.hide();
        });
        block.close.addEventListener("click", function (e) {
            block.show();
        })
    }
});
