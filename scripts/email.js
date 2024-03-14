"use strict";

// форма емфил
document.addEventListener('DOMContentLoaded', () => {
    const sectionForm = document.querySelector(".wrapper");
    const openForm = document.querySelectorAll(".btn");
    const clozeForm = document.querySelectorAll(".form-close");
    const nameErrorr = document.querySelector(".name-error");
    const mailErorr = document.querySelector(".mail-error");
    const messageError = document.querySelector(".message-error");

    openForm.forEach(open => {
        open.addEventListener("click", () => {
            sectionForm.classList.add("form-activ");
        });
    });

    clozeForm.forEach(closes => {
        closes.addEventListener("click", () => {
            sectionForm.classList.remove("form-activ");
        });
    });

    function hideError(elementId) {
        document.querySelector(`#${elementId}`).classList.remove("form-error");
    }

    function validateName() {
        const nameInput = document.getElementsByName("name")[0].value.trim();
        const nameValid = /^[a-zA-Zа-яА-ЯЁё]+$/;

        if (nameInput === "" || !nameValid.test(nameInput)) {
            document.querySelector("#formName").classList.add("form-error");
            nameErrorr.style.display = 'block';
        } else {
            nameErrorr.style.display = 'none';
            hideError('formName');     
        }
    }

    function validateEmail() {
        const mailInput = document.getElementsByName("Email")[0].value.trim();
        const emailValid = /^\S+@\S+\.\S+$/;

        if (mailInput === "") {
            document.querySelector("#formEmail").classList.add("form-error");
            mailErorr.style.display = 'none'; 
        } else if (!emailValid.test(mailInput)) {
            mailErorr.style.display = 'block';
        } else {
            mailErorr.style.display = 'none';
        }
    }

    function validateMessage() {
        const messageInput = document.querySelector("#formMessage").value.trim(); 

        if (messageInput === "") {
            document.querySelector("#formMessage").classList.add("form-error");
            messageError.style.display = 'block';
        } else {
            messageError.style.display = 'none';
            document.querySelector("#formMessage").classList.remove("form-error");
            hideError('formMessage');
        }
    }

    document.getElementsByName("name")[0].addEventListener('input', validateName);
    document.getElementsByName("Email")[0].addEventListener('input', validateEmail);
    document.querySelector("#formMessage").addEventListener('input', validateMessage);

    document.querySelector("#form").addEventListener('submit', function(event) {
        validateName();
        validateEmail();
        validateMessage();

        const hasError = document.querySelector(".form-error") !== null;

        if (hasError) {
            event.preventDefault(); 
        } else {
            alert("Форма успешно отправлена!");
        }
    });
});




