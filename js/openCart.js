export function openCart() {
    const modalCart = document.querySelector(".modal-cart");
    const cartBTN = document.querySelector(".button-cart");
    const closeBTN = document.querySelector(".close");
    const clearCartBTN = document.querySelector(".clear-cart")
    const counterBTN = document.querySelectorAll(".counter-button");
    const uncounterBTN = document.querySelector(".uncounter-button");
    const counter = document.querySelector(".counter");
    const priceFood = document.querySelector(".food-price");
    const foodItem = document.querySelectorAll(".food-row");
    const modalPriceTag = document.querySelector(".modal-pricetag");

    cartBTN.addEventListener("click", () => {
        modalCart.style.display = "flex";
    });
    
    closeBTN.addEventListener("click", () => {
        modalCart.style.display = "none";
    });
    
    clearCartBTN.addEventListener("click", () => {
        foodItem.forEach(item => {
            item.remove();
        });
        modalPriceTag.textContent = `${0} ₽`
    });
}