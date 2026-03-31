function copyCode(id) {
    let code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code);
    alert("✅ Code copied!");
}

function searchCode() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("code-card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function filterCode(category) {
    let cards = document.getElementsByClassName("code-card");

    for (let i = 0; i < cards.length; i++) {
        if (category === "all") {
            cards[i].style.display = "block";
        } else if (cards[i].classList.contains(category)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

/* 🌙 Toggle Mode + Save */
function toggleMode() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
}

/* Load saved mode */
window.onload = function () {
    let savedMode = localStorage.getItem("mode");

    if (savedMode === "light") {
        document.body.classList.add("light");
    }
}
