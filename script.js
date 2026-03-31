function copyCode(id) {
    let code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code);
    alert("Code copied 😎");
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
