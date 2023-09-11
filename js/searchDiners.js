export function searchDiners() {
    setTimeout(function () {
        const titles = document.querySelectorAll(".card-title");
        const searchInput = document.querySelector(".input-search");
        searchInput.addEventListener("input", () => {
            const filter = searchInput.value.toLowerCase();

            titles.forEach(item => {
                const title = item.textContent.toLowerCase();

                if (title.includes(filter)) {
                    item.parentElement.parentElement.parentElement.style.display = "block";
                }   else {
                    item.parentElement.parentElement.parentElement.style.display = "none";
                }
            });
        });
    }, 100);    
}

searchDiners();
