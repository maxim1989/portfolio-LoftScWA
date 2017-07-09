document.addEventListener("DOMContentLoaded", function (e) {
    let message = {
        buttons: document.querySelectorAll(".contact-form__btn"),
        submit: function (e) {
            e.preventDefault();
            let name = document.getElementById("contact-form-name").value,
                email = document.getElementById("contact-form-email").value,
                message = document.getElementById("contact-form-message").value,
                nameLen = name.length,
                emailLen = email.length,
                messageLen = message.length;
            if (!nameLen) alert("Введите имя");
            if (!emailLen) alert("Введите почтовый адрес");
            if (!messageLen) alert("Введите текст сообщения");
            if (nameLen && emailLen && messageLen) {
                alert("ЗАПРОС ОТПРАВЛЕН");
            }
        },
        clean: function (e) {
            e.preventDefault();
            let form = document.querySelector(".contact-form__form");
            form.reset();
        }
    };

    if (message.buttons.length) {
        message.buttons.forEach(function (currentValue, index) {
            if (currentValue.text.toLocaleLowerCase() === "отправить"){
                message.buttons[index].addEventListener("click", message.submit);
            }
            if (currentValue.text.toLocaleLowerCase() === "очистить"){
                message.buttons[index].addEventListener("click", message.clean);
            }
        })
    }
});
