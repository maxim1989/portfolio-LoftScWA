$(document).ready(function () {
    let flip = {
        cards: document.querySelector(".card.effect-click"),
        btn: document.querySelector(".header-hello__auth"),
        wrapper: document.querySelector(".wrapper-hello"),
        flag: false,
        makeAuth: function () {
            this.cards.classList.toggle('flipped');
            this.btn.style.visibility = 'hidden';
            this.flag = true;
        },
        mainPage: function () {
            this.cards.classList.toggle('flipped');
            this.btn.style.visibility = 'visible';
            this.flag = false;
        }
    };

    if (window.location.hash === "#auth") {
        flip.makeAuth();
        window.location.hash = "";
    }

    if (flip.btn) {
        flip.btn.addEventListener("click", function (e) {
            if (e.target.className == "header-hello__auth" || e.target.className == "header-hello__auth-btn") {
                flip.makeAuth();
            }
        });
        flip.wrapper.addEventListener("click", function (e) {
            if (e.target.className == "wrapper wrapper-hello" && flip.flag) {
                flip.mainPage();
            }
        })
    }
});
