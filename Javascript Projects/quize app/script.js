const url = "https://opentdb.com/api.php?amount=10";
let btns = document.querySelectorAll(".btn");
let question = document.querySelector(".Que p");
let next = document.querySelector(".next-btn button");
let score = document.querySelector(".next-btn p");
let i = 0;
let count = 0;
async function fetchAPI() {
  let result = await fetch(url);
  console.log(result);
  let data = await result.json();
  console.log(data);

  question.innerHTML = data.results[i].question;

  const [f, g, h, m] = btns;
  const j = [f, g, h, m];

  const [a, b, c, d] = [
    ...data.results[i].incorrect_answers,
    data.results[i].correct_answer,
  ];

  console.log("correct answer is: ", data.results[i].correct_answer);

  const options = [a, b, c, d];
  options.sort(() => Math.random() - 0.5);

  for (let i = 0; i < options.length; i++) {
    j[i].innerHTML = options[i];
  }

  btns.forEach((btn) => {
    if (btn.innerHTML == "undefined") {
      btn.classList.add("hide");
    } else if (btn.innerHTML != "undefined") {
      btn.classList.remove("hide");
    }
    btn.addEventListener("click", () => {
      if (btn.innerHTML == data.results[i].correct_answer) {
        btn.style.backgroundColor = "green";
        count++;
        score.innerHTML = `score: ${count}/10😊`;
      } else {
        btn.style.backgroundColor = "red";
        btn.disabled = true;
      }
      btns.forEach((btn) => {
        btn.disabled = true;
      });
    });
  });
}

const nextBtn = () => {
  next.addEventListener("click", () => {
    i++;
    fetchAPI();

    btns.forEach((btn) => {
      btn.style.backgroundColor = "white";
      btn.style.color = "black";
      btn.disabled = false;
    });
  });
};

fetchAPI();
nextBtn();
