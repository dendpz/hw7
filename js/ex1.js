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

// To number the questions
let i = 1;

// For-each for our questions list
questions.forEach(question => {
  const qNum = document.createElement("b"); // Bolds the "Question x"
  qNum.textContent = `Question ${i}: `;

  const qText = document.createElement("i"); // Italicizes the actual question text
  qText.textContent = question.statement;

  const qElement = document.createElement("div"); // Create div element to include both question# and text
  qElement.appendChild(qNum);
  qElement.appendChild(qText);

  const answerElement = document.createElement("div"); 
  const buttonElement = document.createElement("button"); // Create a "Show answer" button and add it to the answerElement
  buttonElement.textContent = "Show answer";
  answerElement.appendChild(buttonElement);

  buttonElement.addEventListener("click", () => { // Add an event that when clicked, the answer from the question will show and the button will disappear
    const showElement = document.createElement("div");
    showElement.textContent = question.answer;
    answerElement.innerHTML = "";
    answerElement.appendChild(showElement);
  });
  
  const questionElement = document.createElement("p"); // Add all together
  questionElement.appendChild(qElement);
  questionElement.appendChild(answerElement);
  document.getElementById("content").appendChild(questionElement);

  i++;
});