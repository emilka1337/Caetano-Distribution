document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        // document.querySelector(".heading").style.transform = "translateX(0)";
        // document.querySelector(".heading").style.webkitTransform = "translateX(0)";
        // document.querySelector(".heading").style.opacity = "1";
        window.scrollTo({
            top: 0
        });
        
        document.querySelector('.down').addEventListener("click", () => {
            if (window.innerWidth > 1200) {
                scrollDown();
            }
        });
        document.querySelector('.up').addEventListener("click", () => {
            if (window.innerWidth > 1200) {
                scrollUp();
                scrollUp();
            }
        });

        setTimeout(() => {
            // document.querySelector(".about-us-left-image").style.opacity = 1;
            // document.querySelector(".about-us-right-image").style.opacity = 1;
            document.querySelector('.bg').style.opacity = 1;
        }, 1000);
    }, 500);
});


let scrollPos = 1;
let allowScroll = true;

document.addEventListener("wheel", (e) => {
    scrollHandler(e);
});

function scrollHandler(e) {
    if (allowScroll) {
        allowScroll = false;

        if (e.deltaY > 0) {
            scrollDown();
        } else {
            scrollUp();
        }

        setTimeout(function () {
            allowScroll = true;
        }, 2000);
    }
}

function scrollDown() {
    if (document.querySelector('#sidebar').classList.contains("shown")) {
        document.querySelector('#openSidebar').click();
    }
    if (scrollPos < 3) {
        scrollPos++
    }
    if (scrollPos == 2) {
        document.querySelector(".heading").style.transform = "translateY(-80vh)";
        document.querySelector(".down").style.opacity = "0";

        setTimeout(function () {
            document.body.style.transform = "translateY(-650px)";
            document.querySelector('.divider').style.border = "1px solid #fff";

            setTimeout(function () {
                document.querySelector('#table').style.transform = "translateY(0)";
                setTimeout(() => {
                    document.querySelector('.divider').style.height = "280px";
                }, 500);
            }, 1000);
        }, 1000);
    } else if (scrollPos == 3) {
        document.body.style.transform = "translateY(-1300px)";
        document.querySelector('#table').style.transform = "translateY(-100px)";
        document.querySelector('.up').style.display = "initial";

        setTimeout(function() {
            document.querySelector('.footer-img').style.transform = "translateY(0)";
        }, 200);
    }
}

function scrollUp() {
    if (scrollPos > 0) {
        scrollPos--;
    }
    if (scrollPos == 2) {
        document.body.style.transform = "translateY(-650px)";
        document.querySelector('#table').style.transform = "translateY(0)";
        setTimeout(function () {
            document.querySelector('.footer-img').style.transform = "translateY(100px)";
        }, 500);
    } else if (scrollPos == 1) {
        document.querySelector('.divider').style.height = "0";
        document.body.style.transform = "translateY(-0)";
        document.querySelector('#table').style.transform = "translateY(100px)";
        window.scrollTo({ top: 0, behavior: "smooth" });
        
        setTimeout(() => {
            document.querySelector('.divider').style.border = "none";
            document.querySelector(".heading").style.transform = "translateY(0)";
            document.querySelector(".arrow").style.opacity = "1";
        }, 1000);
    }
}