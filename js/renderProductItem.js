export function renderProductItem(productItem) {
    const cartModalWindow = document.querySelector(".modal-body");

    const foodRowItem = document.createElement("div");
    foodRowItem.classList.add("food-row");
    foodRowItem.id = productItem.foodId;

    const foodNameItem = document.createElement("span");
    foodNameItem.classList.add("food-name");
    foodNameItem.textContent = productItem.foodName;

    const foodPriceItem = document.createElement("strong");
    foodPriceItem.classList.add("food-price");
    foodPriceItem.textContent = `${productItem.foodPrice} ₽`;
    foodPriceItem.id = productItem.foodId;

    const foodCounterItem = document.createElement("div");
    foodCounterItem.classList.add("food-counter");

    const foodUncounterBTN = document.createElement("button");
    foodUncounterBTN.classList.add("counter-button");
    foodUncounterBTN.id = "uncounter-btn";
    foodUncounterBTN.textContent = "-";

    const foodCounterText = document.createElement("span");
    foodCounterText.classList.add("counter");
    foodCounterText.textContent = productItem.foodCount;

    const foodCounterBTN = document.createElement("button");
    foodCounterBTN.classList.add("counter-button");
    foodCounterBTN.classList.add("counter-btn");
    foodCounterBTN.textContent = "+";
    foodCounterBTN.id = productItem.foodId;

    foodCounterItem.append(foodUncounterBTN, foodCounterText, foodCounterBTN);
    foodRowItem.append(foodNameItem, foodPriceItem, foodCounterItem);
    cartModalWindow.append(foodRowItem);

}
