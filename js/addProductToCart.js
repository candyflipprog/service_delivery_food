let locationDefault = `http://127.0.0.1:5500/restaurant.html?id`;
let locationID = window.location.href;

function addProductToCart(id) {
    const [urlParam, idLocation ] = id.split("=");
    locationDefault = `${locationDefault}=${idLocation}`;
    
    let addProductBTN = document.querySelector(".button-add-cart");
    const cartContainer = document.querySelector(".modal-body");

    setTimeout(() => {
        addProductBTN = document.querySelectorAll(".button-add-cart");
        console.log(addProductBTN);
    }, 100);

    for(let i = 0; i < addProductBTN.length; i++) {
        addProductBTN[i].addEventListener("click", () => {
            const newOrderRow = document.createElement("div");
            newOrderRow.classList.add("food-row");
            
            const foodName = document.createElement("span");
            foodName.classList.add("food-name");
            
            const foodPrice = document.createElement("strong");
            foodPrice.classList.add("food-price");
            
            const foodCounter = document.createElement("div");
            foodCounter.classListl.add("food-counter");
            
            const uncounterBTN = document.createElement("button");
            uncounterBTN.classList.add("uncounter-btn");
            
            const counterBTN = document.createElement("button");
            counterBTN.classList.add("counter-btn");
            
            const counterText = document.createElement("span");
            counterText.classList.add("counter");
            
            counterBTN.textContent = "1";
            
            foodCounter.append(uncounterBTN, counterText, counterBTN);
            
            newOrderRow.append(foodName, foodPrice, foodCounter);
            
            cartContainer.append(newOrderRow);
        });
    }
}

addProductToCart(locationID);