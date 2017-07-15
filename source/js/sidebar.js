$(document).ready(function () {
    let btn = document.querySelector(".blog-main__click"),
        blockLeft = document.querySelector(".blog-main__left"),
        blockRight = document.querySelector(".blog-main__right"),
        closed = true;

    if (btn) {
        btn.addEventListener("click", function (e) {
            if (closed) {
                blockLeft.style.left = "0";
                closed = false;
            } else {
                blockLeft.style.left = "-30%";
                closed = true;
            }
        });

        blockRight.addEventListener("scroll", function (e) {
            let scrollHeight = e.target.scrollHeight - e.target.clientHeight,
                articles = document.querySelectorAll(".article__item"),
                articlesCount = articles.length,
                sectionHeight = scrollHeight / articlesCount,
                chapters = document.querySelectorAll(".chapter__item"),
                scrollTop = e.target.scrollTop;
            for (let i=0; i < articlesCount; i++) {
                if (i*sectionHeight <= scrollTop && scrollTop <= (i + 1)*sectionHeight) {
                    chapters[i].classList.add('chapter__item_active')
                } else {
                    if (i-1 >= 0 || i+1 <= articlesCount-1){
                        chapters[i].classList.remove('chapter__item_active')
                    }
                }
            }
        })
    }
});
