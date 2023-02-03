const reviews = [
    {
        id: 1,
        name: "Ruric Thar, the Unbowed",
        specialty: "Burn noncreature spells",
        img: "images/ruricthar.png",
        text: "Vigilance, Reach. Ruric Thar attacks each combait if able. Whenever a player casts a noncreature spell, Ruric deals 6 damage to that player",
    },
    {
        id: 2,
        name: "Fynn, the Fangbearer",
        specialty: "Poison counters",
        img: "images/fynn.png",
        text: "Deathtouch. Whenever a creature you control with deathtouch deals combat damage to a player, thar player gets two poison counters.",
    },
    {
        id: 3,
        name: "Akroma, Angel of Fury",
        specialty: "Protection from blue and white",
        img: "images/akroma.png",
        text: "Can't be countered. Flying and trample. 8 commander cost. Strong but high Commander Cost. Has morph for 6",
    },
];

const img = document.getElementById("pic-img");
const commanderName = document.getElementById("commander-name");
const specialty = document.getElementById("specialty");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showCommander();
});

function showCommander() {
    const item = reviews[currentItem];
    img.src = item.img;
    commanderName.textContent = item.name;
    specialty.textContent = item.specialty;
    text.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showCommander();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showCommander();
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showCommander();
});

// HIDE AND SHOW NAVBAR
// const navToggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function () {
//     links.classList.toggle("show-links");
// });

// TRANSPARENT NAVBAR

const scrollNav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 50) {
        scrollNav.classList.add("nav-transparent");
    } else if (window.scrollY <= 50) {
        scrollNav.classList.remove("nav-transparent");
    }
});
