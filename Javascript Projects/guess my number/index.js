let number = document.querySelector(".number");
let check = document.querySelector(".check");
let msg = document.querySelector(".guess");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let reset = document.querySelector(".again");
let highscore_question = document.querySelector(".highquestion");
let body = document.querySelector("body");
let your_score = 20;

//number must be between 0 to 20
let guess_number = () => {
  let option = [];
  for (let i = 0; i < 21; i++) {
    option.push(option[i]);
  }
  let number = Math.floor(Math.random(option) * 20) + 1;
  return number;
};
// Math.floor(Math.random(option) * 20) + 1;

let guess_num = guess_number();
check.addEventListener("click", () => {
  let num = number.value;
  let sc = score.innerHTML;
  let hsc = highscore.innerText;
  console.log(guess_num);
  if (isNaN(num) || num < 0 || num > 20) {
    msg.innerText = "Invalid input!";
    return;
  } else if (num == "") {
    msg.innerText = "Enter Number";
    return;
  } else if (sc == 0 && hsc == 0) {
    msg.innerText = "You lose,Play again";
    number.disabled = true;
  } else if (sc == 0) {
    msg.innerText = "You lose,Play again";
    number.disabled = true;
  } else if (guess_num == num) {
    msg.innerText = "correct number!";
    highscore.innerText = your_score;
    highscore_question.innerHTML = your_score;
    body.style.backgroundColor = "#6de1f3";
    number.disabled = true;
  } else if (num > guess_num) {
    msg.innerText = "Too high!";
    your_score--;
    score.innerText = your_score;
  } else {
    msg.innerText = "Too low!";
    your_score--;
    score.innerText = your_score;
  }
});

let gameReset = () => {
  reset.addEventListener("click", () => {
    guess_num = guess_number();
    // Math.floor(Math.random(option) * 20) + 1;
    your_score = 20;
    score.innerText = your_score;
    number.value = " ";
    body.style.backgroundColor = "rgb(35, 34, 34)";
    number.disabled = false;
    msg.innerText = "start guessing...";
  });
};

gameReset();
