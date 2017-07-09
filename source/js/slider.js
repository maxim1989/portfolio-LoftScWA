document.addEventListener("DOMContentLoaded", function (e) {
    let slider = {
        flag: true,
        timeOne: 400,
        timeTwo: 700,
        arrowDown: document.querySelector(".other-works__arrow_down"),
        arrowUp: document.querySelector(".other-works__arrow_up"),

        moveHidden: function (element, position) {
            setTimeout(function () {
                element.style.visibility = "hidden";
                element.style.top = position;
            }, this.timeOne);
            return element
        },

        draw: function(all, current, sibling, hiddenSpace, animationSpace, pos1, pos2){
            if (sibling && sibling.classList.contains("other-works__pic")) {
                let promise = new Promise((resolve, reject) => {
                    sibling.classList.add("other-works__pic-active");
                    current.classList.remove("other-works__pic-active");
                    sibling.style.top = "0";
                    current.style.top = animationSpace;
                    resolve(current);
                });
                promise.then(currentUp => {
                    setTimeout(function () {
                        currentUp.style.visibility = "hidden";
                        currentUp.style.top = hiddenSpace;
                        }, this.timeOne);
                    return currentUp
                }).then(
                    currentUp => {
                        setTimeout(function () {
                            currentUp.style.visibility = "visible";
                            slider.flag = true;
                            }, this.timeTwo);
                    });
            } else {
                let promise = new Promise((resolve, reject) => {
                    all[pos2].classList.remove("other-works__pic-active");
                    all[pos1].classList.add("other-works__pic-active");
                    all[pos2].style.top = animationSpace;
                    all[pos1].style.top = "0%";
                    resolve(all[pos2]);
                });
                promise.then(last => {
                    setTimeout(function () {
                        last.style.visibility = "hidden";
                        last.style.top = hiddenSpace;
                        }, this.timeOne);
                    return last;
                }).then(last => {
                    setTimeout(function () {
                        last.style.visibility = "visible";
                        slider.flag = true;
                        }, this.timeTwo);
                })
            }
        },

        nextMain: function(){
            let currentMain = document.querySelector(".current-work__pic.current-work__active-pic"),
                next = currentMain.nextElementSibling,
                allMain = document.querySelectorAll(".current-work__pic");
            currentMain.classList.remove("current-work__active-pic");
            if (next && next.classList.contains("current-work__pic")) {
                next.classList.add("current-work__active-pic");
            } else {
                allMain[0].classList.add("current-work__active-pic");
            }
        },

        click: function () {
            this.flag = false;
            let currentUp = document.querySelector(".other-works__up > .other-works__pic-active"),
                allUp = document.querySelectorAll(".other-works__up > .other-works__pic"),
                nextUp = currentUp.nextElementSibling,
                currentDown = document.querySelector(".other-works__down > .other-works__pic-active"),
                allDown = document.querySelectorAll(".other-works__down > .other-works__pic"),
                previousDown = currentDown.previousElementSibling;
            this.draw(allDown, currentDown, previousDown, "-100%", "100%", allDown.length - 1, 0);
            this.draw(allUp, currentUp, nextUp, "100%", "-100%", 0, allUp.length - 1);
            this.nextMain();
        },

        arrowDownClick: function (e) {
            e.preventDefault();
            if (slider.flag) {
                slider.click();
            }
        },

        arrowUpClick: function (e) {
            e.preventDefault();
            if (slider.flag) {
                slider.click();
            }
        }
    };

    if (slider.arrowDown){
        slider.arrowDown.addEventListener("click", slider.arrowDownClick);
    }
    if (slider.arrowUp){
        slider.arrowUp.addEventListener("click", slider.arrowUpClick);
    }
});
