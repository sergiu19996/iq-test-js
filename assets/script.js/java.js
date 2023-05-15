const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Leon", "London", "Dublin"],
      answer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo de Vinci", "Vincent van Gogh", "Damian Hurst"],
      answer: 1
    }
  ];
  // getters
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const optionContainer = document.getElementById("option-container");
  const submitButton = document.getElementById("submit-btn");
  const resultContainer = document.querySelector("#result-container");
  const restart = document.getElementById("again");
  let currentQuestion = 0;
  let score = 0;
  restart.style.visibility = "hidden";
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
  function selectOption(optionIndex) {
    const currentQuizData = quizData[currentQuestion];
    if (optionIndex === currentQuizData.answer) {
      score ++;
    } 
  }
  // disable options after selection
  const options = optionContainer.getElementsByClassName("option");
  Array.from(options).forEach(option => {
    option.removeEventListener("click", selectOption);
    option.classList.add("disabled");
  });
  function showNextQuestion() {
    currentQuestion ++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.innerText = `You scored ${score} out of ${quizData.length}`;
    resultContainer.style.display = 'block';
    restart.style.visibility = 'visible';
  }
  submitButton.addEventListener('click', showNextQuestion);
  loadQuestion();