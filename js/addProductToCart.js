let locationDefault = `http://127.0.0.1:5500/restaurant.html?id`;
let locationID = window.location.href;

let productsArr = [];

const cartContainer = document.querySelector(".modal-body");

function addProductToCart(id) {
    const [urlParam, idLocation ] = id.split("=");
    locationDefault = `${locationDefault}=${idLocation}`;
    
    // let addProductBTN = document.querySelector(".button-add-cart");
    
    
    setTimeout(() => {
        let addProductBTN = document.querySelectorAll(".button-add-cart");
        fetch(`../db/${idLocation}`).then((response) => response.json()).then((json) => {
            for(let elem of json) {
                        let productObject = {
                            name: elem.name,
                            price: elem.price,
                            id: elem.id,
                            counter: 1
                        };
                for(let i = 0; i < addProductBTN.length; i++) {
                    addProductBTN[i].addEventListener("click", (event) => {
                        if(event.target.id == elem.id) {
                            const newOrderRow = document.createElement("div");
                            newOrderRow.classList.add("food-row");
                            
                            const foodName = document.createElement("span");
                            foodName.classList.add("food-name");
                            foodName.textContent = elem.name;
                            
                            const foodPrice = document.createElement("strong");
                            foodPrice.classList.add("food-price");
                            foodPrice.textContent = `${elem.price} ₽`;                 
                            
                            const foodCounter = document.createElement("div");
                            foodCounter.classList.add("food-counter");
                            
                            const uncounterBTN = document.createElement("button");
                            uncounterBTN.classList.add("uncounter-button");
                            uncounterBTN.textContent = "-";
                            
                            const counterBTN = document.createElement("button");
                            counterBTN.classList.add("counter-button");
                            counterBTN.textContent = "+";
                            
                            const counterText = document.createElement("span");
                            counterText.classList.add("counter");
                            
                            counterText.textContent = "1";
                            
                        foodCounter.append(uncounterBTN, counterText, counterBTN);
                        
                        newOrderRow.append(foodName, foodPrice, foodCounter);
                        
                        cartContainer.append(newOrderRow);

                        productsArr.push(productObject);
                        localStorage.setItem("products", JSON.stringify(productsArr));
                        
                    }
                    console.log(localStorage.getItem("products"));
                });
            }
        }
    })
}, 100);
}

addProductToCart(locationID);


console.log()

if(localStorage.products) {
    JSON.parse(localStorage["products"]).forEach(item => {
        const newOrderRow = document.createElement("div");
        newOrderRow.classList.add("food-row");
        
        const foodName = document.createElement("span");
        foodName.classList.add("food-name");
        foodName.textContent = item.name;
        
        const foodPrice = document.createElement("strong");
        foodPrice.classList.add("food-price");
        foodPrice.textContent = `${item.price} ₽`;                 
        
        const foodCounter = document.createElement("div");
        foodCounter.classList.add("food-counter");
        
        const uncounterBTN = document.createElement("button");
        uncounterBTN.classList.add("uncounter-button");
        uncounterBTN.textContent = "-";
        
        const counterBTN = document.createElement("button");
        counterBTN.classList.add("counter-button");
        counterBTN.textContent = "+";
        
        const counterText = document.createElement("span");
        counterText.classList.add("counter");
        
        counterText.textContent = "1";
                            
        foodCounter.append(uncounterBTN, counterText, counterBTN);
        
        newOrderRow.append(foodName, foodPrice, foodCounter);
        
        cartContainer.append(newOrderRow);
    });
}