import { renderingDiners } from "./renderingDiners.js";
import { searchDiners } from "./searchDiners.js";
import { auth } from "./auth.js";
import { openCart } from "./openCart.js";

    const modalAuth = document.querySelector(".modal-auth");
    const authBTN = document.querySelector(".button-auth");
    const cartBTN = document.getElementById("cart-button");
    const exitBTN = document.querySelector(".button-out");
    const username = document.querySelector(".user-name");

document.addEventListener("DOMContentLoaded", async () => {
    renderingDiners();
    searchDiners();
    auth();
    openCart();

    if(localStorage.getItem("status") == "true") {
        authBTN.style.display = "none";
        modalAuth.style.display = "none"
        cartBTN.style.display = "flex";
        exitBTN.style.display = "flex";
        username.style.display = "flex";

        username.textContent = localStorage.getItem("users");
    }
});
