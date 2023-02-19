// TRANSPARENT NAVBAR
const scrollNav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 50) {
        scrollNav.classList.add("nav-transparent");
    } else if (window.scrollY <= 50) {
        scrollNav.classList.remove("nav-transparent");
    }
});

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    //console.log(question)
    const btn = question.querySelector(".question-btn");
    //console.log(btn)
    btn.addEventListener("click", function () {
        for (let x = 0; x < questions.length; x++) {
            const item = questions[x];
            item.classList.remove("show-answers");
        }
        // questions.forEach(function (item) {
        //     item.classList.remove("show-answers");
        // });

        question.classList.toggle("show-answers");
    });
});
