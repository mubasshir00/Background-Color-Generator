const btn = document.getElementById("btn");
const color = document.querySelector(".color");




btn.addEventListener("click", function() {

    const Hue = randomNumberHue();
    const Sat = randomNumberSat();
    const light = randomNumberlight();
    let hslClr = `hsl(${Hue},${Sat}%,${light}%)`
    color.textContent = hslClr;
    document.body.style.backgroundColor = hslClr
})

function randomNumberHue() {
    return Math.floor(Math.random() * 361)
}

function randomNumberSat() {
    return Math.floor(Math.random() * 100 + 1);
}

function randomNumberlight() {
    return Math.floor(Math.random() * 100 + 1);
}