/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

const SESSION_KEY = "triviaSession";
const SCOREBOARD_KEY = "triviaScoreboard";
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
const MAX_SCOREBOARD_ENTRIES = 5;

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

const resumeOverlay = document.getElementById("resumeOverlay");
const resumeBtn = document.getElementById("resumeBtn");
const newQuizBtn = document.getElementById("newQuizBtn");

const scoreboardToggle = document.getElementById("scoreboardToggle");
const scoreboardPanel = document.getElementById("scoreboard");
const scoreboardBody = document.getElementById("scoreboardBody");


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


function saveSession() {
  const session = {
    quizQuestions: quizQuestions,
    currentQuestionIndex: currentQuestionIndex,
    score: score,
    timestamp: Date.now()
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function loadSession() {
  const raw = localStorage.getItem(SESSION_KEY);

  if (!raw) {
    return null;
  }

  try {
    const session = JSON.parse(raw);
    const elapsed = Date.now() - session.timestamp;

    if (elapsed > SESSION_TIMEOUT_MS) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }

    return session;
  } catch (error) {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}


function getScoreboard() {
  const raw = localStorage.getItem(SCOREBOARD_KEY);

  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function addScoreToBoard(newScore, total) {
  const board = getScoreboard();

  board.push({
    score: newScore,
    total: total,
    date: new Date().toLocaleDateString()
  });

  board.sort(function (a, b) {
    return b.score - a.score;
  });

  const trimmed = board.slice(0, MAX_SCOREBOARD_ENTRIES);
  localStorage.setItem(SCOREBOARD_KEY, JSON.stringify(trimmed));
}

function renderScoreboard() {
  const board = getScoreboard();

  if (board.length === 0) {
    scoreboardBody.innerHTML =
      '<tr><td colspan="3" class="empty-scoreboard">No scores yet — finish a quiz!</td></tr>';
    return;
  }

  let html = "";

  for (let i = 0; i < board.length; i++) {
    html +=
      "<tr>" +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + board[i].score + " / " + board[i].total + "</td>" +
      "<td>" + board[i].date + "</td>" +
      "</tr>";
  }

  scoreboardBody.innerHTML = html;
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
  progressElement.textContent = "Question " + (currentQuestionIndex + 1) + " / " + quizQuestions.length;
  scoreElement.textContent = "Score: " + score;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  scoreBar.style.width = progressPercent + "%";
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
  questionElement.textContent = "Quiz finished! Your score is " + score + " out of " + quizQuestions.length + ".";
  progressElement.textContent = "Completed";
  scoreElement.textContent = "Final Score: " + score;
  scoreBar.style.width = "100%";

  quizForm.style.display = "none";
  setFeedback("Well done!", "correct");
  restartBtn.style.display = "block";

  clearSession();
  addScoreToBoard(score, quizQuestions.length);
  renderScoreboard();

  if (!scoreboardPanel.classList.contains("show")) {
    scoreboardPanel.classList.add("show");
    scoreboardToggle.classList.add("active");
  }
}

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
    saveSession();
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
  saveSession();
}


function showResumePrompt() {
  resumeOverlay.style.display = "flex";
}

function hideResumePrompt() {
  resumeOverlay.style.display = "none";
}

function resumeQuiz(session) {
  quizQuestions = session.quizQuestions;
  currentQuestionIndex = session.currentQuestionIndex;
  score = session.score;

  quizForm.style.display = "block";
  restartBtn.style.display = "none";

  showQuestion();
  saveSession();
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

  scoreElement.textContent = "Score: " + score;

  setTimeout(function () {
    goToNextQuestion();
  }, 900);
});

restartBtn.addEventListener("click", function () {
  clearSession();
  startQuiz();
});

scoreboardToggle.addEventListener("click", function () {
  scoreboardPanel.classList.toggle("show");
  scoreboardToggle.classList.toggle("active");
});

resumeBtn.addEventListener("click", function () {
  const session = loadSession();
  hideResumePrompt();

  if (session) {
    resumeQuiz(session);
  } else {
    startQuiz();
  }
});

newQuizBtn.addEventListener("click", function () {
  hideResumePrompt();
  clearSession();
  startQuiz();
});


renderScoreboard();

const savedSession = loadSession();

if (savedSession) {
  showResumePrompt();
} else {
  startQuiz();
}