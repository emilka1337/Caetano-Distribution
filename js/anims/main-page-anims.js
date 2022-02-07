const LOGO = document.querySelector("#logoAnimated");
const LINKS = document.querySelector("#socialLinks");
const ROW3 = document.querySelector(".row-3");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        })
    }, 500);

    // Fades preloader
    setTimeout(() => {
        document.querySelector('.preloader').style.opacity = 0;

        // Animates logo and links panel
        setTimeout(() => {
            document.querySelector('.preloader').style.display = "none";
            LOGO.style.tranform = "translateX(0%)";
            LOGO.style.webkitTransform = "translateX(0%)";
            LOGO.style.opacity = "1";

            LINKS.style.tranform = "translateY(0)";
            LINKS.style.webkitTransform = "translateY(0)";

            // Animates background picture
            setTimeout(() => {
                document.querySelector('.bg').style.opacity = "1";
            }, 700);
        }, 500);
    }, 1500);

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
});

document.addEventListener("DOMContentLoaded", () => {
    let heading = document.querySelector('#logoAnimated');
    let result = '';

    heading.innerText.split("").forEach((letter, index) => {
        result += `<span class="heading-letter">${letter}</span>`;

        if (index == 23) {
            result += '<br>';
        }
    });

    heading.innerHTML = result;

    setTimeout(function () {
        let letters = document.querySelectorAll('.heading-letter');

        letters.forEach((letter, index) => {
            setTimeout(function () {
                letter.style.transform = "translateY(0)";
                letter.style.opacity = "1";
            }, 70 * index);
        })
    }, 2000);
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

document.querySelector('.sidebar-button').addEventListener("click", function () {
    if (!this.classList.contains("close")) {
        document.querySelector("#sidebar").classList.add("shown");
        setTimeout(function() {
            LINKS.classList.add("sidebar-open");
        }, 200);
        this.classList.add("close");
    } else {
        document.querySelector("#sidebar").classList.remove("shown");
        LINKS.classList.remove("sidebar-open");
        this.classList.remove("close");
    }
});

function scrollDown() {
    LOGO.style.tranform = "translateX(-110%)";
    LOGO.style.webkitTransform = "translateX(-110%)";
    LOGO.style.opacity = "0";
    LINKS.style.opacity = "0";

    if (document.querySelector('#sidebar').classList.contains("shown")) {
        document.querySelector('#openSidebar').click();
    }

    setTimeout(() => {
        document.body.style.transform = "translateY(-850px)";

        fadeLinks("translateY(800px)");
        document.querySelector('#down').style.display = "none";
    }, 500);
}

function scrollUp() {
    setTimeout(() => {
        LOGO.style.tranform = "translateX(0%)";
        LOGO.style.webkitTransform = "translateX(0%)";
        LOGO.style.opacity = "1";

        fadeLinks("none");

        setTimeout(function () {
            document.querySelector('#down').style.display = "block";
        }, 1500);
    }, 500);

    document.body.style.transform = "translateY(0)";
}

function fadeLinks(to) {
    LINKS.style.opacity = "0";
    
    setTimeout(function () {
        LINKS.style.transform = to;
        setTimeout(function () {
            LINKS.style.opacity = "1";
        }, 1000);
    }, 1000);
}