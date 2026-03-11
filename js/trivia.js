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
  },
  {
    question: "How many legs does a spider have?",
    answers: ["6", "8", "10", "12"],
    correctIndex: 1
  },
  {
  question: "What gas do humans breathe in?",
  answers: ["Carbon", "Nitrogen", "Oxygen", "Helium"],
  correctIndex: 2
  },
  {
    question: "Which is a primary color?",
    answers: ["Green", "Purple", "Red", "Brown"],
    correctIndex: 2
  },
  {
  question: "What is H2O commonly known as?",
  answers: ["Salt", "Water", "Sugar", "Air"],
  correctIndex: 1
  },
  {
  question: "Which animal barks?",
  answers: ["Cat", "Dog", "Cow", "Sheep"],
  correctIndex: 1
  },
  {
  question: "How many continents are there?",
  answers: ["5", "6", "7", "8"],
  correctIndex: 2
  },
  {
  question: "What is the capital of France?",
  answers: ["Berlin", "Madrid", "Paris", "Rome"],
  correctIndex: 2
  },
  {
 question: "Which fruit is yellow?",
 answers: ["Apple", "Banana", "Cherry", "Grape"],
 correctIndex: 1
  },
  {
  question: "What do cows drink?",
  answers: ["Milk", "Water", "Juice", "Tea"],
  correctIndex: 1
  },
  {
  question: "Which shape has 3 sides?",
  answers: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 1
  },
  {
  question: "What is 5 + 5?",
  answers: ["8", "9", "10", "11"],
  correctIndex: 2 
  },
  {
  question: "Which month has Christmas?",
  answers: ["October", "November", "December", "January"],
  correctIndex: 2
  },
  {
  question: "What color is grass?",
  answers: ["Blue", "Green", "Red", "Yellow"],
  correctIndex: 1
  },
  {
  question: "Which animal lives in water?",
  answers: ["Lion", "Fish", "Dog", "Tiger"],
  correctIndex: 1
  },
  {
  question: "Which planet is known as the Red Planet?",
  answers: ["Earth", "Mars", "Saturn", "Neptune"],
  correctIndex: 1
  },
  {
  question: "What is the opposite of hot?", answers: ["Warm", "Cool", "Cold", "Wet"],
  correctIndex: 2
  },
  {
  question: "Which bird can fly?",
  answers: ["Penguin", "Ostrich", "Eagle", "Chicken"],
  correctIndex: 2
  },
  {
  question: "How many wheels does a car usually have?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
  },
  {
  question: "What do we use to write on a blackboard?",
  answers: ["Pen", "Pencil", "Chalk", "Brush"],
  correctIndex: 2
  },
  {
  question: "Which animal has a trunk?",
  answers: ["Lion", "Elephant", "Horse", "Dog"],
  correctIndex: 1
  },
  {
  question: "What is 5 + 5?",
  answers: ["8", "9", "10", "11"],
  correctIndex: 2
  },
  {
  question: "Which month has Christmas?",
  answers: ["October", "November", "December", "January"],
  correctIndex: 2
  },
  {
  question: "What color is grass?",
  answers: ["Blue", "Green", "Red", "Yellow"],
  correctIndex: 1
  },
  {
  question: "Which animal lives in water?",
  answers: ["Lion", "Fish", "Dog", "Tiger"],
  correctIndex: 1
  },
  {
  question: "Which planet is known as the Red Planet?",
  answers: ["Earth", "Mars", "Saturn", "Neptune"],
  correctIndex: 1
  },
  {
  question: "What is the opposite of hot?",
  answers: ["Warm", "Cool", "Cold", "Wet"],
  correctIndex: 2
  },
  {
  question: "Which bird can fly?",
  answers: ["Penguin", "Ostrich", "Eagle", "Chicken"],
  correctIndex: 2
  },
  {
  question: "How many wheels does a car usually have?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
  },
  {
  question: "What do we use to write on a blackboard?",
  answers: ["Pen", "Pencil", "Chalk", "Brush"],
  correctIndex: 2
  },
  {
  question: "Which animal has a trunk?",
  answers: ["Lion", "Elephant", "Horse", "Dog"],
  correctIndex: 1
  },
  {
  question: "What color are strawberries?",
  answers: ["Blue", "Green", "Red", "Purple"],
  correctIndex: 2
  },
  {
  question: "Which planet has rings?",
  answers: ["Earth", "Mars", "Saturn", "Mercury"],
  correctIndex: 2
  },
  {
  question: "What do plants need to grow?",
  answers: ["Stone", "Sunlight", "Plastic", "Sand"],
  correctIndex: 1
  },
  {
  question: "Which animal can swim?",
  answers: ["Eagle", "Camel", "Dolphin", "Tiger"],
  correctIndex: 2
  },
  {
  question: "How many minutes are in an hour?",
  answers: ["30", "45", "60", "90"],
  correctIndex: 2
  },
  {
  question: "Which is a winter month?",
  answers: ["July", "August", "January", "May"],
  correctIndex: 2
  },
  {
  question: "What do we wear on our feet?",
  answers: ["Gloves", "Shoes", "Hats", "Belts"],
  correctIndex: 1
  },
  {
  question: "Which animal gives wool?",
  answers: ["Cow", "Goat", "Sheep", "Pig"],
  correctIndex: 2
  },
  {
  question: "What is the center of our solar system?",
  answers: ["Moon", "Earth", "Sun", "Mars"],
  correctIndex: 2
  },
  {
  question: "Which fruit grows on trees?",
  answers: ["Potato", "Apple", "Carrot", "Onion"],
  correctIndex: 1
  },
  {
  question: "Which shape is round?",
  answers: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 2
  },
  {
  question: "Which animal roars?",
  answers: ["Dog", "Cat", "Lion", "Cow"],
  correctIndex: 2
  },
  {
  question: "What do we use to cut paper?",
  answers: ["Knife", "Fork", "Scissors", "Spoon"],
  correctIndex: 2
  },
  {
  question: "Which is a cold place?",
  answers: ["Desert", "Jungle", "Arctic", "Beach"],
  correctIndex: 2
  },
  {
  question: "What do we drink soup from?",
  answers: ["Plate", "Cup", "Bowl", "Box"],
  correctIndex: 2
  },
  {
  question: "Which insect makes webs?",
  answers: ["Bee", "Spider", "Fly", "Ant"],
  correctIndex: 1
  },
  {
  question: "Which animal hops?",
  answers: ["Horse", "Kangaroo", "Cow", "Goat"],
  correctIndex: 1
  },
  {
  question: "Which object tells time?",
  answers: ["Chair", "Clock", "Table", "Door"],
  correctIndex: 1
  },
  {
  question: "Which is a sweet food?",
  answers: ["Salt", "Sugar", "Pepper", "Vinegar"],
  correctIndex: 1
  },
  {
  question: "Which is a large sea animal?",
  answers: ["Shark", "Mouse", "Cat", "Dog"],
  correctIndex: 0
  },
  {
  question: "Which vehicle flies?",
  answers: ["Car", "Bike", "Plane", "Boat"],
  correctIndex: 2
  },
  {
  question: "Which is used to call someone?",
  answers: ["Phone", "Plate", "Book", "Shoe"],
  correctIndex: 0
  },
  {
  question: "Which animal has stripes?",
  answers: ["Elephant", "Zebra", "Dog", "Cow"],
  correctIndex: 1
  },
  {
  question: "Which is a farm animal?",
  answers: ["Lion", "Tiger", "Cow", "Wolf"],
  correctIndex: 2
  },
  {
  question: "Which is hot in the sky?",
  answers: ["Moon", "Sun", "Starfish", "Cloud"],
  correctIndex: 1
  },
  {
  question: "What do we read?",
  answers: ["Book", "Chair", "Lamp", "Bottle"],
  correctIndex: 0
  },
  {
  question: "Which sport uses a ball?",
  answers: ["Swimming", "Running", "Football", "Cycling"],
  correctIndex: 2
  },
  {
  question: "Which animal lives in the jungle?",
  answers: ["Polar bear", "Camel", "Monkey", "Penguin"],
  correctIndex: 2
  },
  {
  question: "Which is a kitchen tool?",
  answers: ["Hammer", "Wrench", "Spoon", "Saw"],
  correctIndex: 2
  },
  {
  question: "What color is snow?",
  answers: ["Black", "Green", "White", "Brown"],
  correctIndex: 2
  },
  {
  question: "Which is a metal?",
  answers: ["Wood", "Plastic", "Iron", "Paper"],
  correctIndex: 2
  },
  {
  question: "Which animal has a long neck?",
  answers: ["Dog", "Giraffe", "Pig", "Cat"],
  correctIndex: 1
  },
  {
  question: "What do we wear in rain?",
  answers: ["Sunglasses", "Raincoat", "Sandals", "Cap"],
  correctIndex: 1
  },
  {
  question: "Which is a musical instrument?",
  answers: ["Table", "Chair", "Flute", "Door"],
  correctIndex: 2
  },
  {
  question: "Which animal has feathers?",
  answers: ["Fish", "Bird", "Dog", "Horse"],
  correctIndex: 1
  },
  {
  question: "Which is a source of light?",
  answers: ["Rock", "Sun", "Sand", "Mud"],
  correctIndex: 1
  },
  {
  question: "What do we use to brush teeth?",
  answers: ["Comb", "Toothbrush", "Fork", "Pen"],
  correctIndex: 1
  },
  {
  question: "Which animal lives in cold regions?",
  answers: ["Camel", "Penguin", "Tiger", "Monkey"],
  correctIndex: 1
  },
  {
  question: "Which fruit is red?",
  answers: ["Banana", "Apple", "Pear", "Lemon"],
  correctIndex: 1
  },
  {
  question: "Which is a body part?",
  answers: ["Table", "Chair", "Hand", "Book"],
  correctIndex: 2
  },
  {
  question: "Which is used for cooking?",
  answers: ["Pan", "Pillow", "Mirror", "Clock"],
  correctIndex: 0
  },
  {
  question: "Which is a pet animal?",
  answers: ["Lion", "Tiger", "Dog", "Wolf"],
  correctIndex: 2
  },
  {
  question: "Which season is cold?",
  answers: ["Summer", "Spring", "Winter", "Autumn"],
  correctIndex: 2
  },
  {
  question: "What do we use to see far?",
  answers: ["Microscope", "Telescope", "Hammer", "Drill"],
  correctIndex: 1
  },
  {
  question: "Which is a vegetable?",
  answers: ["Carrot", "Apple", "Banana", "Grape"],
  correctIndex: 0
  },
  {
  question: "Which animal has fins?",
  answers: ["Fish", "Dog", "Horse", "Lion"],
  correctIndex: 0
  },
  {
  question: "Which is a color?",
  answers: ["Happy", "Fast", "Blue", "Run"],
  correctIndex: 2
  },
  {
  question: "What do we use to open doors?",
  answers: ["Key", "Knife", "Spoon", "Pen"],
  correctIndex: 0
  },
  {
  question: "Which animal has horns?",
  answers: ["Goat", "Cat", "Dog", "Rabbit"],
  correctIndex: 0
  },
  {
  question: "Which is a flying insect?",
  answers: ["Ant", "Bee", "Snail", "Worm"],
  correctIndex: 1
  }

];

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

function createRandomQuizQuestions() {
  const shuffledQuestions = [...questions];

  shuffledQuestions.sort(function () {
    return Math.random() - 0.5;
  });

  const questionAmount = Math.min(10, shuffledQuestions.length);
  quizQuestions = shuffledQuestions.slice(0, questionAmount);
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
  currentQuestionIndex = 0;
  score = 0;

  createRandomQuizQuestions();

  quizForm.style.display = "block";
  restartBtn.style.display = "none";

  showQuestion();
});

createRandomQuizQuestions();
showQuestion();