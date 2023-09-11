async function renderingProducts(filename) {
    fetch(`../db/${filename}`)
        .then((response) => response.json())
        .then((json) => {
            const container = document.querySelector(".cards-menu");
            for(let elem of json) {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("card");

                const itemCardImg = document.createElement("img");
                itemCardImg.classList.add("card-image");
                itemCardImg.src = `${elem.image}`;
                itemCardImg.alt = "image";

                const itemCardText = document.createElement("div");
                itemCardText.classList.add("card-text");

                const itemCardHeading = document.createElement("div");
                itemCardHeading.classList.add("card-heading");

                const itemCardTitle = document.createElement("h3");
                itemCardTitle.classList.add("card-title");
                itemCardTitle.classList.add("card-title-reg");
                itemCardTitle.textContent = `${elem.name}`;

                const itemCardInfo = document.createElement("div");
                itemCardInfo.classList.add("card-info");

                const ingredients = document.createElement("div");
                ingredients.classList.add("ingredients");
                ingredients.textContent = `${elem.description}`;
                
                const itemCardButtons = document.createElement("div");
                itemCardButtons.classList.add("card-buttons");

                const itemBTN = document.createElement("button");
                itemBTN.classList.add("button");
                itemBTN.classList.add("button-primary");
                itemBTN.classList.add("button-add-cart");
                itemBTN.id = elem.id;

                const cardText = document.createElement("span");
                cardText.classList.add("button-card-text");
                cardText.textContent = "В корзину";
                cardText.id = elem.id;

                const cardImage = document.createElement("span");
                cardImage.classList.add("button-cart-svg");

                const cardPrice = document.createElement("strong");
                cardPrice.classList.add("card-price-bold");
                cardPrice.textContent = `${elem.price}`;

                itemCardHeading.append(itemCardTitle);
                
                itemCardInfo.append(ingredients);
                
                itemBTN.append(cardText, cardImage);

                itemCardButtons.append(itemBTN, cardPrice);

                itemCardText.append(itemCardHeading, itemCardInfo, itemCardButtons);

                itemDiv.append(itemCardImg, itemCardText);

                container.append(itemDiv);
            }
        }
    )
}

let defaultLocation = new URLSearchParams(window.location.search);
let locationParam = defaultLocation.get('id');

renderingProducts(locationParam);
