function replaceSliderArrows() {
    let img1 = document.createElement("img");
    img1.src = "./img/arrow-3.png";
    img1.style.width = "100px";

    let img2 = document.createElement("img");
    img2.src = "./img/arrow-3.png";
    img2.style.transform = "rotate(180deg)";
    img2.style.width = "100px";

    document.querySelector(".flickity-button.previous").innerHTML = "";
    document.querySelector(".flickity-button.next").innerHTML = "";
    document.querySelector(".flickity-button.previous").append(img1);
    document.querySelector(".flickity-button.next").append(img2);
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(replaceSliderArrows, 500);
    // document.querySelector('.heading').style.transform = "translateX(0)";
    // document.querySelector('.heading').style.opacity = "1";
    document.querySelector('.down').addEventListener("click", () => {
        if (window.innerWidth > 1200) {
            scrollDown();
        }
    });
    document.querySelector('.up').addEventListener("click", () => {
        if (window.innerWidth > 1200) {
            scrollUp();
        }
    });

    setTimeout(function () {
        // document.querySelector('.left-back').style.opacity = "1";
        // document.querySelector('.left-back').style.transform = "translateY(0)";
        // document.querySelector('.right-back').style.opacity = "1";
        // document.querySelector('.right-back').style.transform = "translateY(0)";
        document.querySelector('.bg').style.opacity = "1";
    }, 1000);

    setTimeout(() => {
        window.scrollTo({
            top: 0
        })
    }, 500);
});

document.addEventListener("wheel", (e) => scrollReaction(e));

let allowScroll = true;

function scrollReaction(e) {
    if (allowScroll) {
        allowScroll = false;

        if (window.innerWidth > 1200) {
            if (e.deltaY > 0) {
                scrollDown();
            } else if (e.deltaY < 0) {
                scrollUp();
            }
        }

        setTimeout(function () {
            allowScroll = true;
        }, 2000);
    }
}

function scrollDown() {
    document.querySelector('.heading').style.transform = "translateY(-1000px)";
    if (document.querySelector('#sidebar').classList.contains("shown")) {
        document.querySelector('#openSidebar').click();
    }

    setTimeout(function () {
        if (!document.body.classList.contains("scrolled")) {
            document.body.classList.add("scrolled");

            setTimeout(function () {
                document.querySelector('.divider').classList.add("shown");
                document.querySelector('.main-carousel').classList.add("shown");
                document.querySelector('.up').style.opacity = "1";
            }, 1500);
        }
    }, 1000);
}

function scrollUp() {
    if (!document.body.classList.contains("scrolled")) return;
    document.querySelector('.divider').classList.remove("shown");
    document.querySelector('.main-carousel').classList.remove("shown");
    document.querySelector('.heading').style.transform = "translateY(0)";

    setTimeout(function () {
        document.body.classList.remove("scrolled");
    }, 500);
}