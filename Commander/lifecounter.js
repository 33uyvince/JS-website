// TRANSPARENT NAVBAR
const scrollNav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 50) {
        scrollNav.classList.add("nav-transparent");
    } else if (window.scrollY <= 50) {
        scrollNav.classList.remove("nav-transparent");
    }
});

const defaultNumber = 40;

const scoreboards = document.getElementsByClassName("scoreboard");

for (const scoreboard of scoreboards) {
    const lifeTotal = scoreboard.children[0];
    const btnPlus = scoreboard.children[1];
    const btnMinus = scoreboard.children[2];
    const btnReset = scoreboard.children[3];
    colorIndicator(lifeTotal, +lifeTotal.textContent);

    btnPlus.addEventListener("click", function () {
        let count = +lifeTotal.textContent;
        count += 1;
        lifeTotal.textContent = count;
        colorIndicator(lifeTotal, count);
    });

    btnMinus.addEventListener("click", function () {
        let count = +lifeTotal.textContent;
        count -= 1;
        lifeTotal.textContent = count;
        colorIndicator(lifeTotal, count);
    });

    btnReset.addEventListener("click", function () {
        lifeTotal.textContent = defaultNumber;
        colorIndicator(lifeTotal, defaultNumber);
    });
}

function colorIndicator(element, count) {
    if (count > 0) {
        element.style.color = "green";
    } else if (count < 0) {
        element.style.color = "red";
    } else {
        element.style.color = "#222";
    }
}
