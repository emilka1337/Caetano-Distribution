const LANGUAGES = {
    ru: {
        navbar: '<li><a href="./about_us.html">О нас</a></li><li> <a href="./vendors.html">Вендоры</a></li><li><a href="./logistics.html">Логистика</a></li><li><a href="./clients.html">Наши клиенты</a></li><li><a href="./team.html">Наша команда</a></li><li><a class="current-page" href="./contacts.html">Контакты</a></li><li><a href="./news.html">Новости</a></li>',
        cv: "Прикрепить резюме",
        send: "Отправить",
        success: "Отправлено в обработку",
        fail: "Произошла ошибка :( \nПопробуйте чуть позже."
    },
    az: {
        navbar: '<li><a href="./about_us.html">Haqqımızda</a></li><li> <a href="./vendors.html">Vendorlar</a></li><li><a href="./logistics.html">Logistika</a></li><li><a href="./clients.html">Bizim müştərilərimiz</a></li><li><a href="./team.html">Bizim komandamız</a></li><li><a class="current-page" href="./contacts.html">Əlaqə</a></li><li><a href="./news.html">Xəbərlər</a></li>',
        cv: "CV əlavə edin",
        send: "Göndər",
        success: "Emal üçün təqdim edildi",
        fail: "Xəta baş verdi :( \n Bir az sonra cəhd edin"
    },
    en: {
        navbar: '<li><a href="./about_us.html">About Us</a></li><li> <a href="./vendors.html">Vendors</a></li><li><a href="./logistics.html">Logistics</a></li><li><a href="./clients.html">Our clients</a></li><li><a href="./team.html">Our team</a></li><li><a class="current-page" href="./contacts.html">Contacts</a></li><li><a href="./news.html">News</a></li>',
        cv: "Attach CV",
        send: "Send",
        success: "Successfully sent",
        fail: "An error occured :( \nTry again later."
    }
}

const FORM_LANGS = {
    ru: {
        name: "Имя",
        surname: "Фамилия",
        fatherName: "Отчество",
        location: "Место проживания",
        phone: "Номер телефона",
        email: "Электронный адрес",
        position: "Желаемая должность"
    },
    az: {
        name: "Ad",
        surname: "Soyad",
        fatherName: "Ata adı",
        location: "Yaşadığıvız ünvan",
        phone: "Əlaqə nömrəsi",
        email: "Elektron ünvan",
        position: "Karyera məqsədi"
    },
    en: {
        name: "Name",
        surname: "Surname",
        fatherName: "Farther name",
        location: "City",
        phone: "Phone",
        email: "E-mail",
        position: "Career objective"
    }
}

function changeFormLang(lang, anim = true) {
    let inputs = document.querySelectorAll('input[type="text"], input[type="email"]');

    let counter = 0;

    for (let phrase in FORM_LANGS[lang]) {
        let currElem = inputs[counter];
        currElem.setAttribute("placeholder", FORM_LANGS[lang][phrase]);

        if (anim && !currElem.parentElement.classList.contains("sidebar-right")) {
            currElem.classList.add("text-anim");
            setTimeout(() => {
                currElem.classList.remove("text-anim");
            }, 1000);
        }

        counter++;
    }
}

document.querySelector("#langRU").addEventListener("click", function () {
    changeFormLang("ru", this);
});
document.querySelector("#langAZ").addEventListener("click", function () {
    changeFormLang("az", this);
});
document.querySelector("#langEN").addEventListener("click", function () {
    changeFormLang("en", this);
});