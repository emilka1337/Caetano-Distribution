// Новости редактировать тут и ТОЛЬКО ТУТ
// Внизу массив из 6-ти актуальных новостей
// Каждая новость мультиязычна, имеет заголовок, содержание, путь к картинке и дату публикации
// Картинки к новостям лежат в папке img/news

const allNews = [
    {
        ru: {
            title: "Тестовая новость 1.",
            contents: "Короткое описание тестовой новости 1.",
            imgSrc: "./img/news/news1.png",
            date: "Июнь 7 / 2021"
        },
        az: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news1.png",
            date: "Iyun 7 / 2021"
        },
        en: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news1.png",
            date: "June 7 / 2021"
        }

    },
    {
        ru: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news2.png",
            date: "Июнь 7 / 2021"
        },
        az: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news2.png",
            date: "Iyun 7 / 2021"
        },
        en: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news2.png",
            date: "June 7 / 2021"
        }
    },
    {
        ru: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news3.png",
            date: "Июнь 7 / 2021"
        },
        az: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news3.png",
            date: "Iyun 7 / 2021"
        },
        en: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news3.png",
            date: "June 7 / 2021"
        }
    },
    {
        ru: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news4.png",
            date: "Июнь 7 / 2021"
        },
        az: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news4.png",
            date: "Iyun 7 / 2021"
        },
        en: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news4.png",
            date: "June 7 / 2021"
        }
    },
    {
        ru: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news5.png",
            date: "Июнь 7 / 2021"
        },
        az: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news5.png",
            date: "Iyun 7 / 2021"
        },
        en: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news5.png",
            date: "June 7 / 2021"
        }
    },
    {
        ru: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news6.png",
            date: "Июнь 7 / 2021"
        },
        az: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news6.png",
            date: "Iyun 7 / 2021"
        },
        en: {
            title: "Lorem ipsum.",
            contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
            imgSrc: "./img/news/news6.png",
            date: "June 7 / 2021"
        }
    },
];