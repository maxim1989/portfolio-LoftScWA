document.addEventListener("DOMContentLoaded", function (e) {
    let auth = {
        authBtn: document.querySelectorAll(".menu__link"),
        submit: function (e) {
            e.preventDefault();
            let name = document.getElementById("auth-form-name").value,
                password = document.getElementById("auth-form-email").value,
                checkbox = document.getElementById("form__checkbox").checked,
                sure = document.getElementById("form__cash").checked,
                nameLength = name.length,
                passwordLength = password.length;
            if (!nameLength) alert("Введите имя");
            if (!passwordLength) alert("Введите пароль");
            if (!checkbox) alert("Капча не пройдена");
            if (!sure) alert("Вы точно не робот?");
            if (nameLength && passwordLength && checkbox && sure) {
                alert("ЗАПРОС НА АВТОРИЗАЦИЮ ОТПРАВЛЕН");
            }
        }
    };

    if (auth) {
        auth.authBtn.forEach(function (currentValue, index) {
            if (currentValue.text.toLocaleLowerCase() === "войти"){
                auth.authBtn[index].addEventListener("click", auth.submit);
            }
        })
    }
});
