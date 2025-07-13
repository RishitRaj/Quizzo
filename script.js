document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#quizform");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            let topic = document.querySelector('input[name="topic"]:checked');
            if (topic) {
                let page = "";
                switch (topic.value) {
                    case "anime":
                        page = "anime-quiz.html";
                        break;
                    case "gk":
                        page = "gk-quiz.html";
                        break;
                    case "science":
                        page = "science-quiz.html";
                        break;
                    case "social":
                        page = "social-quiz.html";
                        break;
                }
                window.location.href = page;
            } else {
                alert("Please select a topic before starting the quiz.");
            }
        });
    }

    let questions = document.querySelectorAll(".question");
    let nextButtons = document.querySelectorAll(".next_button");
    let resultbox = document.querySelector(".result");

    nextButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            questions[index].classList.remove("active");
            if (questions[index + 1]) {
                questions[index + 1].classList.add("active");
            }
        });
    });

    let score=0;
    let yourscore= document.querySelector("#score");
    let submit = document.querySelector("#submitquiz");
    if (submit) {
        submit.addEventListener("click", (event) => {
            event.preventDefault();
            questions.forEach((q) => {
                const correct= q.dataset.answer;
                const selected = q.querySelector("input[type='radio']:checked");

            if (selected && selected.value === correct) {
                score++;
            }
            })
            if (resultbox) {
                resultbox.style.display = "block";
                yourscore.innerText= `Your Score: ${score}`;
            }
        });
    }
    let options = document.querySelectorAll("input[type='radio']");
    let again= document.querySelector("#play_again");
    again.addEventListener("click",()=>{
        score=0;
        questions[9].classList.remove("active");
        questions[0].classList.add("active");
        resultbox.style.display="none";
        options.forEach(opt => opt.checked = false);
    })
});