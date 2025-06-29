let form = document.querySelector("#quizform");
if (form){
    form.addEventListener("submit",(event)=>{
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
    })
}
 let questions = document.querySelectorAll(".question");
 let nextButtons = document.querySelectorAll(".next_button");

nextButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        questions[index].classList.remove("active");
        questions[index + 1].classList.add("active");
      });
    });