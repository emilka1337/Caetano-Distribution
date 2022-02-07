// document.querySelector('#submit').addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector('.form-left').style.display = "none";
//     document.querySelector('.form-right').style.display = "none";
//     sendForm();
// });

// function sendForm() {
//     const CAETANO_EMAIL = "maxmudov2000@gmail.com";

//     emailjs.sendForm("service_je864u5", "template_fmc0l28", document.querySelector('form'), {
//         from_email: document.querySelector('#email').value,
//         from_name: `${document.querySelector('#name').value} ${document.querySelector('#surname').value}`,
//         to: CAETANO_EMAIL,
//         subject: "Резюме"
//     }).then(() => {
//         document.querySelector('.success').classList.add("show");
//     }).catch((err) => {
//         console.log(err);
//         document.querySelector('.fail').classList.add("show");
//     });
// }

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     emailjs.sendForm('service_je864u5', 'template_fkwqk17', this)
//         .then(function () {
//             document.querySelector('.form-left').style.display = "none";
//             document.querySelector('.form-right').style.display = "none";
//             document.querySelector('.success').classList.add("show");
//         }, function (error) {
//             document.querySelector('.form-left').style.display = "none";
//             document.querySelector('.form-right').style.display = "none";
//             document.querySelector('.fail').classList.add("show");
//             console.log(error);
//         });
// });