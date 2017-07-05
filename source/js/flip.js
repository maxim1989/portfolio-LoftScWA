$(document).ready(function () {
    let cards = $(".card.effect-click"),
        btn = $(".header-hello__auth"),
        wrapper = $(".wrapper-hello"),
        flag = false;

    btn.on( "click", function(e) {
        if (e.target.className == "header-hello__auth" || e.target.className == "header-hello__auth-btn") {
            cards.toggleClass('flipped');
            btn.css({visibility: 'hidden'});
            flag = true;
        }
    });
    wrapper.on("click", function (e) {
        if (e.target.className == "wrapper wrapper-hello" && flag) {
            cards.toggleClass('flipped');
            btn.css({visibility: 'visible'});
            flag = false;
        }
    })
});
