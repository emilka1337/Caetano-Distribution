document.addEventListener("DOMContentLoaded", () => {
    // document.querySelector('.heading').style.transform = "translateX(0)";
    // document.querySelector('.heading').style.opacity = "1";
    document.querySelector('.arrow').addEventListener("click", () => {
        if(window.innerWidth > 1200) {
            // scrollDown();
            window.scrollTo({top: 700, behavior: "smooth"})
        }
    });

    setTimeout(function () {
        document.querySelector('.bg-1').style.opacity = "1";
        document.querySelector('.bg-2').style.opacity = "1";
    }, 1000);

    window.scrollTo({ top: 0 });
});

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 400) {
        document.querySelector('.logistics-card-1').style.opacity = "1";
        document.querySelector('.logistics-card-1').style.transform = "none";
        document.querySelector('.social-links').style.opacity = 0;
    } else {
        document.querySelector('.logistics-card-1').style.opacity = "0";
        document.querySelector('.logistics-card-1').style.transform = "translateY(0px)";
        document.querySelector('.social-links').style.opacity = 1;
    }
    if (window.scrollY > 1000) {
        document.querySelector('.logistics-card-2').style.opacity = "1";
        document.querySelector('.logistics-card-2').style.transform = "none";
    } else {
        document.querySelector('.logistics-card-2').style.opacity = "0";
        document.querySelector('.logistics-card-2').style.transform = "translateY(0px)";
    }
    if (window.scrollY > 1600) {
        document.querySelector('.logistics-card-3').style.opacity = "1";
        document.querySelector('.logistics-card-3').style.transform = "none";
    } else {
        document.querySelector('.logistics-card-3').style.opacity = "0";
        document.querySelector('.logistics-card-3').style.transform = "translateY(0px)";
    }
    if (window.scrollY > 2200) {
        document.querySelector('.logistics-card-4').style.opacity = "1";
        document.querySelector('.logistics-card-4').style.transform = "none";
    } else {
        document.querySelector('.logistics-card-4').style.opacity = "0";
        document.querySelector('.logistics-card-4').style.transform = "translateY(0px)";
    }

    if (document.querySelector('#sidebar').classList.contains("shown")) {
        document.querySelector('#openSidebar').click();
    }
});