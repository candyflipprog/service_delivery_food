export function updatePrice() {
    const modalPriceTag = document.querySelector(".modal-pricetag");

    const priceArr = [];
    let currentValue = 0;

    for (let item of JSON.parse(localStorage.getItem("foodItems"))) {
        priceArr.push(item.foodPrice);
    }

    let priceTag = priceArr.map((item) => currentValue += item);

    modalPriceTag.textContent = `${priceTag.slice(-1)} ₽`;
}
