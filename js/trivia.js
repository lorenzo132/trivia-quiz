/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

const questions = [
  {
    question: "Which painter was born in Spain?",
    answers: ["Picasso", "Matisse", "Monet", "Van Gogh"],
    correctIndex: 0
  },
  {
    question: "What color do you get when you mix red and blue?",
    answers: ["Green", "Orange", "Purple", "Yellow"],
    correctIndex: 2
  },
  {
    question: "How many days are in a week?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 2
  },
  {
    question: "What planet do we live on?",
    answers: ["Mars", "Venus", "Jupiter", "Earth"],
    correctIndex: 3
  },
  {
    question: "Which animal says meow?",
    answers: ["Dog", "Horse", "Cat", "Cow"],
    correctIndex: 2
  },
  {
    question: "How many hours are in a day?",
    answers: ["12", "18", "24", "30"],
    correctIndex: 2
  },
  {
    question: "Which season comes after spring?",
    answers: ["Winter", "Summer", "Autumn", "Rainy"],
    correctIndex: 1
  },
  {
    question: "What do bees make?",
    answers: ["Milk", "Honey", "Bread", "Ink"],
    correctIndex: 1
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctIndex: 3
  },
  {
    question: "Which instrument has black and white keys?",
    answers: ["Guitar", "Drums", "Piano", "Violin"],
    correctIndex: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const quizForm = document.getElementById("quizForm");
const questionElement = document.getElementById("question");
const answerText0 = document.getElementById("answerText0");
const answerText1 = document.getElementById("answerText1");
const answerText2 = document.getElementById("answerText2");
const answerText3 = document.getElementById("answerText3");
const progressElement = document.getElementById("progress");
const scoreElement = document.getElementById("score");
const scoreBar = document.getElementById("scoreBar");
const feedbackElement = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

function getAnswerInputs() {
  return document.querySelectorAll('input[name="answer"]');
}

function updateMeta() {
  progressElement.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  scoreElement.textContent = `Score: ${score}`;

  const progressPercent = (currentQuestionIndex / questions.length) * 100;
  scoreBar.style.width = `${progressPercent}%`;
}

function setFeedback(message, type) {
  feedbackElement.textContent = message;
  feedbackElement.className = "feedback";

  if (type === "correct") {
    feedbackElement.classList.add("feedback-correct");
  } else if (type === "wrong") {
    feedbackElement.classList.add("feedback-wrong");
  } else {
    feedbackElement.classList.add("feedback-neutral");
  }
}

function clearSelection() {
  const answerInputs = getAnswerInputs();

  for (let i = 0; i < answerInputs.length; i++) {
    answerInputs[i].checked = false;
    answerInputs[i].disabled = false;
  }
}

function disableAnswers() {
  const answerInputs = getAnswerInputs();

  for (let i = 0; i < answerInputs.length; i++) {
    answerInputs[i].disabled = true;
  }
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  answerText0.textContent = currentQuestion.answers[0];
  answerText1.textContent = currentQuestion.answers[1];
  answerText2.textContent = currentQuestion.answers[2];
  answerText3.textContent = currentQuestion.answers[3];

  clearSelection();
  setFeedback("", "neutral");
  submitBtn.disabled = false;

  updateMeta();
}

function getSelectedAnswerIndex() {
  const selectedInput = document.querySelector('input[name="answer"]:checked');

  if (!selectedInput) {
    return null;
  }

  return Number(selectedInput.value);
}

function showFinalScreen() {
  questionElement.textContent = `Quiz finished! Your score is ${score} out of ${questions.length}.`;
  progressElement.textContent = "Completed";
  scoreElement.textContent = `Final Score: ${score}`;
  scoreBar.style.width = "100%";

  quizForm.style.display = "none";
  setFeedback("Well done!", "correct");
  restartBtn.style.display = "block";
}

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showFinalScreen();
  }
}

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedAnswerIndex = getSelectedAnswerIndex();

  if (selectedAnswerIndex === null) {
    setFeedback("Please choose an answer first.", "wrong");
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];

  disableAnswers();
  submitBtn.disabled = true;

  if (selectedAnswerIndex === currentQuestion.correctIndex) {
    score++;
    setFeedback("Correct!", "correct");
  } else {
    setFeedback("Not quite!", "wrong");
  }

  scoreElement.textContent = `Score: ${score}`;

  setTimeout(function () {
    goToNextQuestion();
  }, 900);
});

restartBtn.addEventListener("click", function () {
  currentQuestionIndex = 0;
  score = 0;

  quizForm.style.display = "block";
  restartBtn.style.display = "none";

  showQuestion();
});

showQuestion();