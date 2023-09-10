export function searchDiners() {
    let titles = "";

    setTimeout(function () {
        titles = document.querySelectorAll(".card-title");
    }, 100);
    
    const searchInput = document.querySelector(".input-search");
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();

        titles.forEach(item => {
            const title = item.textContent.toLowerCase();

            if (title.includes(filter)) {
                item.parentElement.parentElement.parentElement.style.display = "block";
            } else {
                item.parentElement.parentElement.parentElement.style.display = "none";
            }
        });
    });
}

searchDiners();
