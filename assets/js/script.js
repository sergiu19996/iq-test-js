const quizData = [{
    question: "What is the capital of France?",
    options: ["Paris", "Leon", "London", "Dublin"],
    answer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Leonardo de Vinci", "Vincent van Gogh", "Damian Hurst"],
    answer: 1
  },
  {
    question: "How many continents are on the planet?",
    options: ["5", "3", "7", "6"],
    answer: 2
  },
  {
    question: "What is the longest river in Europe?",
    options: ["Danube", "Nile", "Volga"],
    answer: 2
  },
  {
    question: "In which European capital can you visit the Colosseum?",
    options: ["Milano", "Bucharest", "Lake Como", "Rome"],
    answer: 3
  },
  {
    question: "what is the biggest country in the world?",
    options: ["China", "Japonia", "Russia", "Ireland"],
    answer: 2
  },
  {
    question: "in which country is Casa Rosada located?",
    options: ["Argentine", "Spain", "Italy"],
    answer: 0
  },
  {
    question: "what is the place with the lowest temperatures on earth?",
    options: ["Antarctic", "Atlantis", "Everest"],
    answer: 0
  },
  {
    question: "which is the smallest country in the europe?",
    options: ["Latvia", "Malta", "Anndora", "Vatican"],
    answer: 3
  },
  {
    question: "in which city of united states the white house is?",
    options: ["Washington", "Los Angeles", "Miami", "New York"],
    answer: 0
  },
];

// Getters
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionContainer = document.getElementById("option-container");
const resultContainer = document.getElementById("result-container");
const correctScores = document.getElementById("correct");
const incorrectScores = document.getElementById("incorrect");
const restart = document.getElementById("again");

let currentQuestion = 0;
let score = 0;
let correctScoresToPrint = 0;
let incorrectScoresToPrint = 0;

// Hide the restart button initially
restart.style.visibility = "hidden";

/**
 * Load the next question from the quiz data array
 */
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionContainer.innerText = currentQuizData.question;
  optionContainer.innerHTML = "";
  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.innerText = option;
    optionElement.addEventListener("click", () => selectOption(index));
    optionContainer.appendChild(optionElement);
  });
}

/**
 * Handle the selection of an option
 * @param {number} optionIndex The index of the selected option
 */
function selectOption(optionIndex) {
  const currentQuizData = quizData[currentQuestion];
  // Check if the selected option is correct and update score
  if (optionIndex === currentQuizData.answer) {
    score++;
    correctScoresToPrint++;
    correctScores.innerHTML = correctScoresToPrint;
  } else {
    incorrectScoresToPrint++;
    incorrectScores.innerHTML = incorrectScoresToPrint;
  }
  // Move to the next question or show result
  showNextQuestion();
}

/**
 * Increment the score and update the score display
 */
function incrementScore() {
  let oldscore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldscore;
}

/**
 * Increment the count of wrong answers and update the display
 */
function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}

/**
 * Show the next question or result if all questions have been answered
 */
function showNextQuestion() {
  // Increment the current question counter
  currentQuestion++;
  // Check if we are at the end of the quiz
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

/** 
 * Show the result of the quiz
 */
function showResult() {
  quizContainer.style.display = "none";
  let message = "You really don't know very much...";
  // Customize the message based on the score
  if (score > 4) {
    message = "You did okay though some improvement would be good!";
    incrementScore();
  }
  if (score > 7) {
    message = "You are a total egg head that was AMAZING!";
  }
  // Display the result message and show the restart button
  resultContainer.innerText = `${message} You scored ${score} out of ${quizData.length}`;
  resultContainer.style.display = 'block';
  restart.style.visibility = 'visible';
}

// Load the first question when the page loads
loadQuestion();
