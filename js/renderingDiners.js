export async function renderingDiners() {
    fetch("../db/db.json")
        .then((response) => response.json())
        .then((json) => {
            const container = document.querySelector(".cards-restaurants");
            for(let elem of json.db.partners) {
                const itemURL = document.createElement("a");
                itemURL.href = `restaurant.html?id=${elem.products}`;
                itemURL.classList.add("card");
                itemURL.classList.add("card-restaurant");

                const itemIMG = document.createElement("img");
                itemIMG.alt = "image";
                itemIMG.classList.add("card-image");
                itemIMG.src = `${elem.image}`

                const itemCardText = document.createElement("div");
                itemCardText.classList.add("card-text");

                const itemCardHeading = document.createElement("div");
                itemCardHeading.classList.add("card-heading");

                const itemTitle = document.createElement("h3");
                itemTitle.classList.add("card-title");
                itemTitle.textContent = `${elem.name}`;

                const itemTimeDelivery = document.createElement("span");
                itemTimeDelivery.classList.add("card-tag");
                itemTimeDelivery.classList.add("tag");
                itemTimeDelivery.textContent = `${elem.time_of_delivery}`;
                
                const itemCardInfo = document.createElement("div");
                itemCardInfo.classList.add("card-info");

                const itemCardRating = document.createElement("div");
                itemCardRating.classList.add("rating");
                itemCardRating.textContent = `${elem.stars}`;

                const itemCardPrice = document.createElement("div");
                itemCardPrice.classList.add("price");
                itemCardPrice.textContent = `${elem.price}`;

                const itemCardCategory = document.createElement("div");
                itemCardCategory.classList.add("category");
                itemCardCategory.textContent = `${elem.kitchen}`;

                container.append(itemURL, itemIMG);
                
                itemCardHeading.append(itemTitle, itemTimeDelivery);

                itemCardText.append(itemCardHeading);

                itemCardInfo.append(itemCardRating, itemCardPrice, itemCardCategory);

                itemCardText.append(itemCardInfo);
                
                itemURL.append(itemIMG, itemCardText);

                container.append(itemURL);
            }
        }
    );
}

renderingDiners();
