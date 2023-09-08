import { renderingDiners } from "./renderingDiners.js";
import { searchDiners } from "./searchDiners.js";
import { auth } from "./auth.js";
import { openCart } from "./openCart.js";

document.addEventListener("DOMContentLoaded", async () => {
    renderingDiners();
    searchDiners();
    auth();
    openCart();

    if(localStorage.getItem("status") == "true") {
        
        document.querySelector(".button-auth").style.display = "none";
        document.querySelector(".modal-auth").style.display = "none"
        document.querySelector("#cart-button").style.display = "flex";
        document.querySelector(".button-out").style.display = "flex";
        document.querySelector(".user-name").style.display = "flex";

        document.querySelector(".user-name").textContent = localStorage.getItem("users");
    }
});
