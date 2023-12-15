$(document).ready(function () {
	$(".slider").slick({
		dots: true,
		slidesToShow: 3,
		// centerMode: true,
	});
})


// кнопка на верх
document.getElementById("on-all").onclick = function ()  {
document.getElementById("header").scrollIntoView({behavior:"smooth"});
}

// меню на главной странице

let links = document.querySelectorAll(".nav__buttom");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
}

// форма емфил

// const btns = document.querySelectorAll(".btn");
// const overley = document.querySelector(".wrapper");
// const form = document.querySelector(".form");
// const body = document.querySelector("body");
// const cloze = document.querySelector(".cloze")

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//         overley.style.display = "flex"
//         body.style.overflow = "hidden"
//     })
// })

// form.addEventListener("click", function (e) {
//     e.stopPropagation();
// })

// cloze.addEventListener("click", function () {
//     overley.style.display = "none"
//     body.style.overflow = "auto"
// })




