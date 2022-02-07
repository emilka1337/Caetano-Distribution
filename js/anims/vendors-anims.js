document.addEventListener("DOMContentLoaded", function () {
    animateHeading();
    setTimeout(replaceSliderArrows, 500);
    setTimeout(animateImages, 1000);

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
        document.querySelector('.heading').style.transition = "2s";
    }, 1200);
});

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

function animateHeading() {
    // document.querySelector('.heading').style.transform = "translateX(0)";
    // document.querySelector('.heading').style.opacity = "1";
}

function animateImages() {
    // document.querySelector('.bg-left').style.transform = "translateY(0)";
    // document.querySelector('.bg-left').style.opacity = "1";
    document.querySelector('.bg').style.opacity = "1";
}

document.addEventListener("wheel", (e) => scrollReaction(e));

function scrollReaction(e) {
    if (window.innerWidth > 1200) {
        if (e.deltaY > 0) {
            scrollDown();
        } else if (e.deltaY < 0) {
            scrollUp();
        }
    }
}

function scrollDown() {
    document.querySelector('#heading').style.transform = "translateX(0px) translateY(-1000px)";
    document.querySelector('.arrow').style.opacity = "0";
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
    document.querySelector('#heading').style.transform = "translateX(0px) translateY(0px)";
    document.querySelector('.divider').classList.remove("shown");
    document.querySelector('.main-carousel').classList.remove("shown");
    
    setTimeout(function() {
        document.querySelector('.arrow').style.opacity = "1";
    }, 1000);

    window.scrollTo({ top: 0, behavior: "smooth" })
    document.body.classList.remove("scrolled");
}