"use strict";

document.querySelector('.sidebar-button').addEventListener("click", function () {
    if (!this.classList.contains("close")) {
        document.querySelector("#sidebar").classList.add("shown");
        this.classList.add("close");
    } else {
        document.querySelector("#sidebar").classList.remove("shown");
        this.classList.remove("close");
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     let heading = document.querySelector('main>h1');
//     let result = '';

//     for (let letter of heading.innerHTML) {
//         result += `<span class="heading-letter">${letter}</span>`;
//     }

//     heading.innerHTML = result;

//     setTimeout(function() {
//         let letters = document.querySelectorAll('.heading-letter');

//         letters.forEach((letter, index) => {
//             setTimeout(function() {
//                 letter.style.transform = "translateY(0)";
//                 letter.style.opacity = "1";
//             }, 100 * index);
//         })
//     }, 500);
// });

document.addEventListener("DOMContentLoaded", () => {

    // setTimeout(function () {

        let letters = document.querySelector('h1 .letters');
        letters.innerHTML = letters.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false }).add({
            targets: '.letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 100 * i
        });
    // }, 500);
})