
window.onload = function () {
    "use strict";

    const form = document.querySelector(".login");
    const usernameO = document.querySelector(".output__user");
    const passwordO = document.querySelector(".output__pass");
    const outputD = document.querySelector(".output");

    const usernameI = document.querySelector(".login__username");
    const passwordI = document.querySelector(".login__password");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;


        if (!usernameI.value) {
            usernameI.classList.add("login__txtbox_error");
            usernameI.focus();
            isValid = false;

        } else if (!passwordI.value) {
            passwordI.classList.add("login__txtbox_error");
            passwordI.focus();
            isValid = false;

        } else {
            usernameI.classList.remove("login__txtbox_error");
            passwordI.classList.remove("login__txtbox_error");
        }

        if (isValid) {
            usernameO.textContent = usernameI.value;
            passwordO.textContent = passwordI.value;
            outputD.classList.remove("output");
        }

    });

};
