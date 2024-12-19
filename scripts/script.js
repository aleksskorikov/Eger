$(document).ready(function () {
	$(".slider").slick({
		dots: true,
		slidesToShow: 3,
		// centerMode: true,
		responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
			}
			},
	]
	});
})


// кнопка на верх
document.querySelector("#on-all").onclick = function ()  {
document.querySelector("#header").scrollIntoView({behavior:"smooth"});
}

// меню на главной странице

let links = document.querySelectorAll(".nav__buttom");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
}







