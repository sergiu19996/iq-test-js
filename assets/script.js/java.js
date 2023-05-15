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
      options: ["Antarctic","Atlantis","Everest"],
      answer: 0
    },
    {
      question: "which is the smallest country in the europe?",
      options: ["Latvia", "Malta", "Anndora", "Vatican"],
      answer: 3
    },
    {
      question: "in which city of united states the white house is?",
      options: ["Washington","Los Angeles", "Miami", "New York"],
      answer: 0
    },
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