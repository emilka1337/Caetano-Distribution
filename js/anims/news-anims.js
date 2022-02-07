document.addEventListener("DOMContentLoaded", () => {
    // document.querySelector('.heading').style.transform = "translateX(0)";
    // document.querySelector('.heading').style.opacity = "1";

    // document.querySelector('.news-top-bg').style.opacity = "1";
    document.querySelector('.bg').style.opacity = "1";

    window.scrollTo({ top: 0 });
});

document.querySelector('.arrow').addEventListener("click", () => {
    window.scrollTo({ top: 400, behavior: "smooth" });
});

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
        document.querySelector('.row-4.news-rows').style.opacity = "1";
        document.querySelector('.row-4.news-rows').style.transform = "none";
        document.querySelector('.social-links').style.opacity = 0;
    } else {
        document.querySelector('.row-4.news-rows').style.opacity = "0";
        document.querySelector('.row-4.news-rows').style.transform = "translateY(200px)";
        document.querySelector('.social-links').style.opacity = 1;
    }
    if (window.scrollY > 600) {
        document.querySelector('.row-5.news-rows').style.opacity = "1";
        document.querySelector('.row-5.news-rows').style.transform = "none";
    } else {
        document.querySelector('.row-5.news-rows').style.opacity = "0";
        document.querySelector('.row-5.news-rows').style.transform = "translateY(200px)";
    }
    if (window.scrollY > 1000) {
        document.querySelector('.row-6.news-rows').style.opacity = "1";
        document.querySelector('.row-6.news-rows').style.transform = "none";
    } else {
        document.querySelector('.row-6.news-rows').style.opacity = "0";
        document.querySelector('.row-6.news-rows').style.transform = "translateY(200px)";
    }
    
    if (document.querySelector('#sidebar').classList.contains("shown")) {
        document.querySelector('#openSidebar').click();
    }
});