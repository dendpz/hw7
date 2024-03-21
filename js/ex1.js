// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In what year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

let i = 1;

questions.forEach(question => {
  const qNum = document.createElement("b");
  qNum.textContent = `Question ${i}: `;

  const qText = document.createElement("i");
  qText.textContent = question.statement;

  const qElement = document.createElement("div");
  qElement.appendChild(qNum);
  qElement.appendChild(qText);

  const answerElement = document.createElement("div");
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Show answer";
  answerElement.appendChild(buttonElement);

  buttonElement.addEventListener("click", () => {
    const showElement = document.createElement("div");
    showElement.textContent = question.answer;
    answerElement.innerHTML = "";
    answerElement.appendChild(showElement);
  });
  
  const questionElement = document.createElement("p");
  questionElement.appendChild(qElement);
  questionElement.appendChild(answerElement);
  document.getElementById("content").appendChild(questionElement);

  i++;
});