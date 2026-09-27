// ---------- JOIN POPUP ----------

const buttons = document.querySelectorAll(".join-button, #joinButton");
const box = document.querySelector("#joinBox");
const close = document.querySelector("#closeButton");
const submit = document.querySelector("#submitButton");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        box.style.display = "flex";
    });
});

close.addEventListener("click", function() {
    box.style.display = "none";
});

submit.addEventListener("click", function() {
    const name = document.querySelector("#nameInput").value;

    if (name === "") {
        alert("Please enter your name.");
    } else {
        alert("Welcome to DevClub, " + name + "!");
        box.style.display = "none";
    }
});


// ---------- SCROLL ANIMATION ----------

const sections = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

});