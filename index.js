let answers = [
  {
    question: "De quem é a famosa frase “Penso, logo existo”?",
    options: [
      "a) Platão",
      "b) Galileu Galilei",
      "c) Descartes",
      "d) Sócrates",
      
    ],
    correct: "c",
  },
  {
    question: "Quantas casas decimais tem o número pi?",
    options: [
      "a) Duas",
      "b) Centenas",
      "c) Infinitas",
      "d) Vinte",
      
    ],
    correct: "c",
  },
  {
    question: "To sem ideia já?",
    options: [
      "a) legal",
      "b) Bacana",
      "c) Interessante",
      "d) Rapaz...",
    
    ],
    correct: "d",
  },
];
const h3Question = document.getElementById("text-question");
const optionLabels = document.querySelectorAll("label");
const submit = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
let respostas = [];
function loadQuestion() {
  h3Question.innerText = `${currentQuestion + 1}. ${
    answers[currentQuestion].question
  }`;
  optionLabels.forEach((label, index) => {
    label.textContent = answers[currentQuestion].options[index];
  });
}
function showResult() {
  const result = document.getElementById("result");
  h3Question.style.display = "none";
  document.getElementById("list-questions").style.display = "none";
  submit.style.display = "none";

  const pResult = document.createElement("h3");
  const aResult = document.createElement("a");
  aResult.href = "../index.html";
  const buttonResult = document.createElement("button");
  buttonResult.innerText = "Voltar";
  aResult.appendChild(buttonResult);
  pResult.innerText = `Voce acertou ${score} perguntas de ${answers.length}`;
  result.append(pResult, aResult);
}
function next() {
  const selectedOption = document.querySelector([
    'input[name="question"]:checked',
  ]);
  if (!selectedOption) {
    return;
  }
  if (selectedOption.value === answers[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < answers.length) {
    loadQuestion();
  } else {
    showResult();
  }
}
submit.addEventListener("click", next);
loadQuestion();
