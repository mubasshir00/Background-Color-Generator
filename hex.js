const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexCOlor = '#';
    for (let i = 0; i < 6; i++) {
        hexCOlor += colorsHex[randomNumber()];
    }
    color.textContent = hexCOlor;
    document.body.style.backgroundColor = hexCOlor;
})

function randomNumber() {
    return Math.floor(Math.random() * colorsHex.length)
}