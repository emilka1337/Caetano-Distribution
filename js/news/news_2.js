function editMainNews(currentNewsId, currLanguage) {
    // В основную новость вносятся данные новости с нужным id из массива с новостями в файле all_news.js
    document.querySelector('.main-news-image').setAttribute("src", allNews[currentNewsId][currLanguage].imgSrc);
    document.querySelector('.news-logo').innerHTML = allNews[currentNewsId][currLanguage].title;
    document.querySelector('.date').innerHTML = allNews[currentNewsId][currLanguage].date;
    document.querySelector('.news-text').innerHTML = allNews[currentNewsId][currLanguage].contents;
}

function editSameNews(currentNewsId, currLanguage) {

    // Цикл, который перебирает похожие новости и исключает из них текущую
    let newsIndexes = 1;

    document.querySelectorAll(".news-card").forEach(card => {
        if (newsIndexes == currentNewsId + 1) {
            newsIndexes++;
        }

        card.children[0].children[0].setAttribute("src", allNews[newsIndexes - 1][currLanguage].imgSrc);
        card.children[1].children[0].innerHTML = allNews[newsIndexes - 1][currLanguage].title;
        card.children[1].children[1].innerHTML = allNews[newsIndexes - 1][currLanguage].date;
        card.children[1].children[2].innerHTML = allNews[newsIndexes - 1][currLanguage].contents;
        card.children[1].children[3].setAttribute("data-news-id", newsIndexes);
        newsIndexes++;
    });
}

function addLinksToNewsButtons() {

    // Вешает обработчик события клика на каждую кнопку внутри карточек похожих новостей
    document.querySelectorAll('.news-card-button').forEach(el => {
        el.addEventListener("click", () => {
            sessionStorage.setItem("currentNewsId", el.dataset["newsId"]);
            location.href = "./news_2.html";
        });
    });
}

function processNews() {
    let currentNewsId = sessionStorage.getItem("currentNewsId") - 1;    // ID новости отличаетя от индекса новости в массиве на 1
    let currLanguage = sessionStorage.getItem("lang") ?? "ru";

    editMainNews(currentNewsId, currLanguage);
    editSameNews(currentNewsId, currLanguage);
    addLinksToNewsButtons();
}