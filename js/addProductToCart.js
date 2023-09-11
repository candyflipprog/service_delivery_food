import { renderProductItem } from "./renderProductItem.js";
import { updatePrice } from "./updatePrice.js";

export function addProductToCart() {
    setTimeout(() => {
        const addProductToCartBTN = document.querySelectorAll(".button-add-cart");

        const [urlItem, itemId] = window.location.href.split("=");
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
    }, 100);
};

addProductToCart();

if (localStorage.getItem("foodItems")) {
    const foodItems = JSON.parse(localStorage.getItem("foodItems"));

    for (let item of foodItems) {
        renderProductItem(item);
        updatePrice();
    }

};