export function openCart() {
    const modalCart = document.querySelector(".modal-cart");
    const openCartBTN = document.querySelector(".button-cart");
    const closeCartBTN = document.querySelector(".close");
    const clearCartBTN = document.querySelector(".clear-cart")
    const counterBTN = document.querySelector(".counter-button");
    const uncounterBTN = document.querySelector(".uncounter-button");

    const counter = document.querySelector(".counter");

    const priceFood = document.querySelectorAll(".food-price");
    const foodItem = document.querySelectorAll(".food-row");

    const modalPriceTag = document.querySelector(".modal-pricetag");

    openCartBTN.addEventListener("click", () => {
        modalCart.style.display = "flex";
    });

    closeCartBTN.addEventListener("click", () => {
        modalCart.style.display = "none";
    });

    clearCartBTN.addEventListener("click", () => {
        const confirmClearCart = confirm("Вы действительно хотите очистить корзину?");
        
        foodItem.forEach(item => {
            if(confirmClearCart) {
                item.remove();
                modalPriceTag.textContent = `${0} ₽`
            } else return;
        });
    });
    
}

openCart();