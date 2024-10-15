let formButton = document.querySelector(".member-btn");
let closeButton = document.querySelector(".close-btn");
let form = document.querySelector(".overlay")

let inputField = document.querySelectorAll("input")
formButton.addEventListener("click", function () {
    form.style.display = "flex";
});

closeButton.addEventListener("click", (() => {
        form.style.display = "none";
    })
)