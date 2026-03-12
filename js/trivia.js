/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

let quizQuestions = [];
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

function shuffleArray(array) {
  const shuffledArray = [...array];

  shuffledArray.sort(function () {
    return Math.random() - 0.5;
  });

  return shuffledArray;
}

function createRandomQuizQuestions() {
  const shuffledQuestions = shuffleArray(questions);
  const questionAmount = Math.min(10, shuffledQuestions.length);
  const selectedQuestions = shuffledQuestions.slice(0, questionAmount);

  quizQuestions = selectedQuestions.map(function (question) {
    const correctAnswer = question.answers[question.correctIndex];
    const shuffledAnswers = shuffleArray(question.answers);
    const newCorrectIndex = shuffledAnswers.indexOf(correctAnswer);

    return {
      question: question.question,
      answers: shuffledAnswers,
      correctIndex: newCorrectIndex
    };
  });
}

function updateMeta() {
  progressElement.textContent = `Question ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
  scoreElement.textContent = `Score: ${score}`;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
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
  const currentQuestion = quizQuestions[currentQuestionIndex];

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
  questionElement.textContent = `Quiz finished! Your score is ${score} out of ${quizQuestions.length}.`;
  progressElement.textContent = "Completed";
  scoreElement.textContent = `Final Score: ${score}`;
  scoreBar.style.width = "100%";

  quizForm.style.display = "none";
  setFeedback("Well done!", "correct");
  restartBtn.style.display = "block";
}

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showFinalScreen();
  }
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  createRandomQuizQuestions();

  quizForm.style.display = "block";
  restartBtn.style.display = "none";

  showQuestion();
}

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedAnswerIndex = getSelectedAnswerIndex();

  if (selectedAnswerIndex === null) {
    setFeedback("Please choose an answer first.", "wrong");
    return;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

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
  startQuiz();
});

startQuiz();