document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
        document.querySelector('.bg').style.opacity = "1";
    }, 1000);
})

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 400) {
        document.querySelector('.row-3.news-rows').style.opacity = "1";
        document.querySelector('.row-3.news-rows').style.transform = "none";
    } else {
        document.querySelector('.row-3.news-rows').style.opacity = "0";
        document.querySelector('.row-3.news-rows').style.transform = "translateY(200px)";
    }
    if (window.scrollY > 800) {
        document.querySelector('.row-4.news-rows').style.opacity = "1";
        document.querySelector('.row-4.news-rows').style.transform = "none";
    } else {
        document.querySelector('.row-4.news-rows').style.opacity = "0";
        document.querySelector('.row-4.news-rows').style.transform = "translateY(200px)";
    }
    if (window.scrollY > 1200) {
        document.querySelector('.row-5.news-rows').style.opacity = "1";
        document.querySelector('.row-5.news-rows').style.transform = "none";
    } else {
        document.querySelector('.row-5.news-rows').style.opacity = "0";
        document.querySelector('.row-5.news-rows').style.transform = "translateY(200px)";
    }

    if (document.querySelector('#sidebar').classList.contains("shown")) {
        document.querySelector('#openSidebar').click();
    }
});