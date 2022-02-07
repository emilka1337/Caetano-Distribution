document.addEventListener("DOMContentLoaded", e => {
    // document.querySelector('.heading').style.transform = "translateX(0)";
    // document.querySelector('.heading').style.opacity = "1";
    document.querySelector('.arrow').addEventListener("click", () => {
        if (window.innerWidth > 1200) {
            scrollDown();
        }
    });

    setTimeout(function() {
        document.querySelector('.bg-1').style.opacity = "1";
        // document.querySelector('.bg-1').style.transform = "translateY(0)";
    }, 1000);

    setTimeout(function () {
        window.scrollTo({ top: 0 });
    }, 500);
});

document.addEventListener("wheel", e => scrollHandler(e));

let allowScroll = true;

function scrollHandler(e) {
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
    document.querySelector('#heading').style.transform = "translateY(-70vh)";
    document.querySelector('.arrow').style.opacity = "0";
    if (document.querySelector('#sidebar').classList.contains("shown")) {
        document.querySelector('#openSidebar').click();
    }

    setTimeout(function () {
        if (window.innerWidth > 1600) {
            document.body.style.transform = "translateY(-70vh)";
        } else if (window.innerWidth > 1366) {
            document.body.style.transform = "translateY(-85vh)";
        } else if (window.innerWidth >= 1280) {
            document.body.style.transform = "translateY(-90vh)";
        }
    }, 1500);
}

function scrollUp() {
    document.body.style.transform = "translateY(0)";

    setTimeout(function() {
        document.querySelector('#heading').style.transform = "translateY(0)";
        document.querySelector('.arrow').style.opacity = "1";
    }, 1000);
}