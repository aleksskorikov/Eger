"use strict";

$(document).ready(function () {
	$(".slider").slick({
		dots: false,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		
		// centerMode: true,
	});
})


// кнопка на верх
document.getElementById("on-all").onclick = function ()  {
document.getElementById("header").scrollIntoView({behavior:"smooth"});
}


// prodnct card sort



const listOne = document.querySelector("#menu-one");
const listTwo = document.querySelector("#menu-two");
const products = document.querySelectorAll(".card");
const productsTwo = document.querySelectorAll(".card-two");
const listItems = document.querySelectorAll(".menu__img");
const listItemsTwo = document.querySelectorAll(".menu-two__img");

function filterMenuOne() {
    listOne.addEventListener(`click`, event => {
		const targetid = event.target.dataset.id;
		const target = event.target;

		if (target.classList.contains("menu__img")) {
			listItems.forEach(listItem => listItem.classList.remove("activ"));
			target.classList.add("activ");
		}
		
        switch (targetid) {
            case "all-category1":
                items("card");
            break;
            case "product-category1":
                items(targetid);
            break;
            case "product-category2":
                items(targetid);
            break;
            case "product-category3":
                items(targetid);
            break;
            case "product-category4":
                items(targetid);
                break;
            case "product-category5":
                items(targetid);
                break;
            case "product-category6":
                items(targetid);
                break;
            case "product-category7":
                items(targetid);
            break;
        }
    })
}
filterMenuOne();

function items(className) {
    products.forEach(product => {
        product.classList.contains(className) ? product.style = `display: flex` : product.style = `display: none`;
    })
}

function filterMenuTwo() {
    listTwo.addEventListener(`click`, event => {
		const targetid = event.target.dataset.id;
		const target = event.target;

		if (target.classList.contains("menu-two__img")) {
			listItemsTwo.forEach(listItem => listItem.classList.remove("activ"));
			target.classList.add("activ");
		}

        switch (targetid) {
            case "all-category-two2":
                item("card-two");
            break;
            case "product-category-two1":
                item(targetid);
            break;
            case "product-category-two2":
                item(targetid);
            break;
            case "product-category-two3":
                item(targetid);
            break;
            case "product-category-two4":
                item(targetid);
            break;
        }
    })
}
filterMenuTwo();

function item(className) {
    productsTwo.forEach(product => {
        product.classList.contains(className) ? product.style = `display: block` : product.style = `display: none`;
    })
}



