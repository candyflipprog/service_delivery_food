export function openCart() {
    const modalCart = document.querySelector(".modal-cart");
    const openCartBTN = document.querySelector(".button-cart");
    const closeCartBTN = document.querySelector(".close");
    const clearCartBTN = document.querySelector(".clear-cart")

    openCartBTN.addEventListener("click", () => {
        modalCart.style.display = "flex";
    });

    closeCartBTN.addEventListener("click", () => {
        modalCart.style.display = "none";
    });

    clearCartBTN.addEventListener("click", () => {
        const confirmClearCart = confirm("Вы действительно хотите очистить корзину?");
        
        if(confirmClearCart) {
            localStorage.removeItem("foodItems");

            alert("Вы успешно очистили корзину!");
            
            location.reload();
        }
    });
}

openCart();
