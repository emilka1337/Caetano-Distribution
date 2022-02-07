let elems = document.querySelectorAll(".text");

let currLang = sessionStorage.getItem("lang") ?? "ru";
resetLangButtonColors()
changeLang(currLang, defineCurrentLangButton(), false);

console.log(elems);

function changeLang(lang, button, anim = true) {
    let counter = 0;

    for (let phrase in LANGUAGES[lang]) {
        let currElem = elems[counter]
        currElem.innerHTML = LANGUAGES[lang][phrase];

        if (anim && !currElem.parentElement.classList.contains("sidebar-right")) {
            currElem.classList.add("text-anim");
            setTimeout(() => {
                currElem.classList.remove("text-anim");
            }, 1000);
        }

        counter++;
    }

    sessionStorage.setItem("lang", lang);

    button.classList.add("active-language");
}

function resetLangButtonColors() {
    let langs = document.querySelectorAll('.languages>li>button');

    for (let lang of langs) {
        lang.classList.remove("active-language");
    }
}

function defineCurrentLangButton() {
    let langButton = document.querySelector("#langRU");

    if (currLang == "az") {
        langButton = document.querySelector("#langAZ")
    } else if (currLang == "en") {
        langButton = document.querySelector("#langEN")
    }

    return langButton;
}

document.querySelector("#langRU").addEventListener("click", function () {
    resetLangButtonColors();
    changeLang("ru", this);
});
document.querySelector("#langAZ").addEventListener("click", function () {
    resetLangButtonColors();
    changeLang("az", this);
});
document.querySelector("#langEN").addEventListener("click", function () {
    resetLangButtonColors();
    changeLang("en", this);
});