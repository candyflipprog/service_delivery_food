import { renderProductItem } from "./renderProductItem.js";
import { updatePrice } from "./updatePrice.js";

export function addProductToCart() {
    setTimeout(() => {
        const addProductToCartBTN = document.querySelectorAll(".button-add-cart");

        const [urlItem, itemId] = window.location.href.split("=");
        if (itemId == undefined) {
            return;
        } else {
            fetch(`../db/${itemId}`)
                .then((response) => response.json())
                .then((json) => {
                    for (let i = 0; i < addProductToCartBTN.length; i++) {
                        for (let item of json) {
                            addProductToCartBTN[i].addEventListener("click", (event) => {
                                event.preventDefault();

                                if (event.target.id == item.id) {
                                    let productItemObject = {
                                        foodId: item.id,
                                        foodName: item.name,
                                        foodPrice: item.price,
                                        foodCount: 1,
                                    };

                                    let oldItems = localStorage.getItem("foodItems");
                                    let newItems = oldItems ? JSON.parse(oldItems) : [];

                                    let status = false;

                                    for (let statusItem of newItems) {
                                        if (statusItem.foodId === productItemObject.foodId) {
                                            statusItem.foodCount += 1;
                                            statusItem.foodPrice += item.price;
                                            status = true;
                                            location.reload();
                                            break;
                                        }
                                    }

                                    if (!status) {
                                        newItems.push(productItemObject);
                                    }

                                    localStorage.setItem("foodItems", JSON.stringify(newItems));

                                    updatePrice();
                                    renderProductItem(productItemObject);
                                }
                            });
                        }
                    }
                });
        }
    }, 100);
};

addProductToCart();

if (localStorage.getItem("foodItems")) {
    const foodItems = JSON.parse(localStorage.getItem("foodItems"));
    let counterBTN = "";

    setTimeout(() => {
        counterBTN = document.querySelectorAll(".counter-btn");
        const counterText = document.querySelectorAll(".counter");
        const foodPrice = document.querySelectorAll(".food-price");

        for (let item of foodItems) {
            counterBTN.forEach(btns => {
                btns.addEventListener("click", () => {
                    if (item.foodId == btns.id) {
                        counterText.forEach(text => {
                            if (text.parentElement.parentElement.childNodes[1].id == item.foodId) {
                                item.foodCount += 1;
                                text.textContent = item.foodCount;

                                const priceIndex = Array.from(foodPrice).findIndex(price => price.id === item.foodId);
                                if (priceIndex !== -1) {
                                    const currentPrice = parseInt(foodPrice[priceIndex].textContent);
                                    const newPrice = currentPrice + item.foodPrice;
                                    foodPrice[priceIndex].textContent = `${newPrice} ₽`;

                                    item.foodPrice = newPrice;
                                    updatePrice();
                                    localStorage.setItem("foodItems", JSON.stringify(foodItems));
                                }
                            }
                        });
                    }
                })
            });
        };
    }, 100);

    for (let item of foodItems) {
        renderProductItem(item);
        updatePrice();
    }
};

