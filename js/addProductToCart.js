import { renderProductItem } from "./renderProductItem.js";

export function addProductToCart() {
    setTimeout(() => {
        const addProductToCartBTN = document.querySelectorAll(".button-add-cart");
    
        for (let i = 0; i < addProductToCartBTN.length; i++) {
            const [urlItem, itemId] = window.location.href.split("=");

            fetch(`../db/${itemId}`)
                .then((response) => response.json())
                .then((json) => {
                    for (let item of json) {
                        addProductToCartBTN[i].addEventListener("click", (event) => {
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

                                if (status != true) {
                                    newItems.push(productItemObject);
                                }

                                localStorage.setItem("foodItems", JSON.stringify(newItems));
                            
                                renderProductItem(productItemObject);

                                alert("Вы успешно добавили продукт!");
                                location.reload();
                            }
                        });
                    }
                });
            }
    }, 100);
};

addProductToCart();


if (localStorage.getItem("foodItems")) {
    const foodItems = JSON.parse(localStorage.getItem("foodItems"));
    const modalPriceTag = document.querySelector(".modal-pricetag");
    const priceArr = [];

    let currentValue = 0;

    for (let item of foodItems) {
        priceArr.push(item.foodPrice);
        
        renderProductItem(item);
    }
    
    let resultPrice = priceArr.map((item) => currentValue += item);        
    modalPriceTag.textContent = `${resultPrice.slice(-1)} ₽`;
 };

const counterBTNS = document.querySelectorAll(".counter-button");
const counterText = document.querySelectorAll(".counter");

for(const elem of counterBTNS) {
        for(let item of JSON.parse(localStorage.getItem("foodItems"))) {
            elem.addEventListener("click", (event) => {
                if(event.target.id == item.foodId) {
                    for(let text of counterText) {
                        text.textContent = parseInt(text.textContent) + 1;
                        item.foodCount = parseInt(counterText.textContent);
                    }
                }
            });
        }
}
