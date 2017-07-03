$(document).ready(function () {
    let cards = $(".card.effect-click"),
        btn = $(".header-hello__auth"),
        wrapper = $(".wrapper-hello"),
        flag = false;
    clickListener(btn, cards, wrapper);
    function clickListener(btn, cards, wrapper) {
        btn.on( "click", function(e) {
            console.log(1, e);
            if (e.target.className == "header-hello__auth" || e.target.className == "header-hello__auth-btn") {
                cards.toggleClass('flipped');
                btn.css({display: 'none'});
                flag = true;
            }
        });
        wrapper.on("click", function (e) {
            console.log(2, e);
            if (e.target.className == "wrapper wrapper-hello" && flag) {
                cards.toggleClass('flipped');
                btn.css({display: 'block'});
                flag = false;
            }
        })
    }
});
