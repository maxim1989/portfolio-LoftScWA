const slider = (function(){
    let block = {
        flag: true,
        timeOne: 400,
        timeTwo: 700,
        arrowDown: document.querySelector(".other-works__arrow_down"),
        arrowUp: document.querySelector(".other-works__arrow_up"),

        moveHidden(element, position, visibility) {
            setTimeout(() => {
                element.style.visibility = visibility;
                element.style.top = position;
            }, this.timeOne);
        },

        showHidden(element, visibility){
            setTimeout(() => {
                element.style.visibility = visibility;
                block.flag = true;
            }, this.timeTwo);
        },

        draw(all, current, sibling, hiddenSpace, animationSpace, pos1, pos2){
            if (sibling && sibling.classList.contains("other-works__pic")) {
                let promise = new Promise((resolve, reject) => {
                    sibling.classList.add("other-works__pic-active");
                    current.classList.remove("other-works__pic-active");
                    sibling.style.top = "0";
                    current.style.top = animationSpace;
                    resolve(current);
                });
                promise.then(currentUp => {
                    this.moveHidden(currentUp, hiddenSpace, "hidden");
                    return currentUp
                }).then(
                    currentUp => {
                        this.showHidden(currentUp, "visible");
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
                    this.moveHidden(last, hiddenSpace, "hidden");
                    return last;
                }).then(last => {
                    this.showHidden(last, "visible");
                })
            }
        },

        nextMain(){
            let allMain = document.querySelectorAll(".current-work__pic");
            for (let i = 0; i < allMain.length; i++) {
                if (allMain[i].classList.contains("current-work__active-pic")) {
                    allMain[i].classList.remove("current-work__active-pic");
                    if (i + 1 <= allMain.length - 1) {
                        allMain[i + 1].classList.add("current-work__active-pic");
                    } else {
                        allMain[0].classList.add("current-work__active-pic");
                    }
                    break;
                }
            }
        },

        nextDescription(){
            let allMain = document.querySelectorAll(".main-work__flex-center");
            for (let i = 0; i < allMain.length; i++) {
                if (allMain[i].classList.contains("main-work__flex-center-active")) {
                    allMain[i].classList.remove("main-work__flex-center-active");
                    if (i + 1 <= allMain.length - 1) {
                        allMain[i + 1].classList.add("main-work__flex-center-active");
                    } else {
                        allMain[0].classList.add("main-work__flex-center-active");
                    }
                    break;
                }
            }
        },

        click() {
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
            this.nextDescription();
        },

        arrowClick(e) {
            e.preventDefault();
            if (block.flag) {
                block.click();
            }
        }
    };
    return {
        eventFoo: block.arrowClick,
        arrowDown: block.arrowDown,
        arrowUp: block.arrowUp
    }
});


document.addEventListener("DOMContentLoaded", function (e) {
    let sl = slider();
    if (sl.arrowDown){
        sl.arrowDown.addEventListener("click", sl.eventFoo);
    }
    if (sl.arrowUp){
        sl.arrowUp.addEventListener("click", sl.eventFoo);
    }
});
