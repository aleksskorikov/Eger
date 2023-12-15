"use strict";

// форма емфил

const btns = document.querySelectorAll(".btn");
const overley = document.querySelector(".wrapper");
const form = document.querySelector(".form");
const body = document.querySelector("body");
const cloze = document.querySelector(".cloze")

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        overley.style.display = "flex"
        body.style.overflow = "hidden"
    })
})

form.addEventListener("click", function (e) {
    e.stopPropagation();
})

cloze.addEventListener("click", function () {
    overley.style.display = "none"
    body.style.overflow = "auto"
})

