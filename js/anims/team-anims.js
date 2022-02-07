document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {

        // document.querySelector('#heading').style.opacity = "1";
        // document.querySelector('#heading').style.transform = "translateX(0)";
    }, 300);

    setTimeout(function() {
        // document.querySelector('.bg-left').style.opacity = "1";
        // document.querySelector('.bg-right').style.opacity = "1";

        document.querySelector('.bg').style.opacity = "1";
    }, 1000);

    document.querySelector('.arrow').addEventListener("click", () => {
        if (window.innerWidth > 1200) {
            scrollDown();
        }
    });

    window.scrollTo({ top: 0 });
});

let scrollPos = 1;
let scrollAllow = true;

document.addEventListener("wheel", (e) => {
    if (scrollAllow) {
        scrollHandler(e);
        scrollAllow = false;
        setTimeout(function() {
            scrollAllow = true;
        }, 1000);
    }
});

function scrollHandler(e) {
    if (e.deltaY > 0 && scrollPos <= 3) {
        scrollDown();
    } else if (e.deltaY < 0) {
        scrollUp();
    }
}

function scrollDown() {
    if (scrollPos == 1) {
        document.querySelector('#heading').style.transform = "translateY(-80vh)";
        document.querySelector(".arrow").style.opacity = "0";
        if (document.querySelector('#sidebar').classList.contains("shown")) {
            document.querySelector('#openSidebar').click();
        }

        setTimeout(function () {
            document.body.style.transform = "translateY(-80vh)";

            setTimeout(function() {
                let teamRow1 = document.querySelector(`.team-row-1`);
                
                for (let i = 0; i < teamRow1.children.length; i++) {
                    setTimeout(function () {
                        teamRow1.children[i].style.opacity = "1";
                    }, (i + 1) * 50);
                }
            }, 800);
        }, 1500);

    } else {
        document.querySelector('.row-3>main').style.transform = `translateY(${-75 * (scrollPos - 1)}vh)`;
        
        setTimeout(function() {
            let teamRow = document.querySelector(`.team-row-${scrollPos - 1}`);
            
            for (let i = 0; i < teamRow.children.length; i++) {
                setTimeout(function() {
                    teamRow.children[i].style.opacity = "1";
                }, (i + 1) * 50);
            }
        }, 800);
    }

    scrollPos++;
}

function scrollUp() {
    scrollPos--;
    console.log(scrollPos);

    if (scrollPos == 1) {
        document.body.style.transform = "translateY(0)";
        
        setTimeout(function () {
            document.querySelector('#heading').style.transform = "translateY(0)";
            document.querySelector(".arrow").style.opacity = "1";
        }, 1000);
    }
    else {
        document.querySelector('.row-3>main').style.transform = `translateY(${-75 * (scrollPos - 2)}vh)`;
    }
}

document.querySelector('.up').addEventListener("click", scrollUp);
document.querySelector('.down').addEventListener("click", () => {
    if (scrollPos <= 3) {
        scrollDown();
    }
});