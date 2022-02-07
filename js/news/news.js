document.querySelectorAll('.news-card').forEach((card, index) => {
    let currLanguage = sessionStorage.getItem("lang") ?? "ru";

    card.children[0].children[0].setAttribute("src", allNews[index][currLanguage].imgSrc);
    card.children[1].children[0].innerHTML = allNews[index][currLanguage].title;
    card.children[1].children[1].innerHTML = allNews[index][currLanguage].date;
    card.children[1].children[2].innerHTML = allNews[index][currLanguage].contents;
    card.children[1].children[3].setAttribute("data-news-id", index + 1);
});

document.querySelectorAll('.news-card-button').forEach(el => {
    el.addEventListener("click", () => {
        sessionStorage.setItem("currentNewsId", el.dataset["newsId"]);
        location.href = "./news_2.html";
    });
});