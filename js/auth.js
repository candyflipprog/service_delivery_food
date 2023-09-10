function auth() {
    const modalAuth = document.querySelector(".modal-auth");
    const authBTN = document.querySelector(".button-auth");
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const loginBTN = document.querySelector(".button-login");
    const cartBTN = document.getElementById("cart-button");
    const exitBTN = document.querySelector(".button-out");
    const username = document.querySelector(".user-name");
    const closeBTN = document.querySelector(".close-auth");

    authBTN.addEventListener("click", () => {
        modalAuth.style.display = "flex";
    });

    loginBTN.addEventListener("click", (event) => {
        event.preventDefault();
        if(loginInput.value == "" || passwordInput.value == "") {
            alert("Попробуйте ещё раз!");
            return;
        } else {
            localStorage.setItem("status", true);
            localStorage.setItem("users", loginInput.value);

            authBTN.style.display = "none";
            modalAuth.style.display = "none"
            cartBTN.style.display = "flex";
            exitBTN.style.display = "flex";
            username.style.display = "flex";

            username.textContent = loginInput.value;

            document.getElementById("logInForm").reset();
        }
    });

    exitBTN.addEventListener("click", () => {
        authBTN.style.display = "flex";
        modalAuth.style.display = "none"
        cartBTN.style.display = "none";
        exitBTN.style.display = "none";
        username.style.display = "none";
        localStorage.setItem("status", false);
    });

    closeBTN.addEventListener("click", () => {
        modalAuth.style.display = "none";
    });
}

if(localStorage.getItem("status") == "true") {
    document.querySelector(".button-auth").style.display = "none";
    document.querySelector(".modal-auth").style.display = "none"
    document.querySelector("#cart-button").style.display = "flex";
    document.querySelector(".button-out").style.display = "flex";
    document.querySelector(".user-name").style.display = "flex";

    document.querySelector(".user-name").textContent = localStorage.getItem("users");
};

auth();
