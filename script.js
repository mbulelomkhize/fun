let numbers = [];
let currentIndex = 0;
let swappedInPass = false;
let timer = 0;
let interval;

let score = 0;
let lives = 3;
let level = 1;

const bars = document.getElementById("bars");
const timerText = document.getElementById("timer");
const bestText = document.getElementById("best");
const message = document.getElementById("message");
const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");
const levelText = document.getElementById("level");

let bestScore = localStorage.getItem("bestBubbleScore") || 0;
bestText.textContent = bestScore;

// SOUNDS
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const startSound = new Audio("start.mp3");
const finishSound = new Audio("finish.mp3");
const clickSound = new Audio("click.mp3");
const gameOverSound = new Audio("gameover.mp3");
const levelUpSound = new Audio("levelup.mp3");

function play(sound){
  sound.currentTime = 0;
  sound.play();
}

function startGameWithIntro(){
  document.getElementById("introScreen").style.display = "none";
  startGame();
}

function randomNumbers() {
  numbers = [];
  let size = 8 + level * 2;

  for (let i = 0; i < size; i++) {
    numbers.push(Math.floor(Math.random() * 90) + 10);
  }
}

function renderBars() {
  bars.innerHTML = "";

  numbers.forEach((num, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    if (index === currentIndex || index === currentIndex + 1) {
      bar.classList.add("highlight");
    }

    bar.style.height = `${num * 3}px`;
    bar.textContent = num;

    bars.appendChild(bar);
  });
}

function updateUI(){
  scoreText.textContent = score;
  livesText.textContent = lives;
  levelText.textContent = level;
}

function startGame() {
  clearInterval(interval);

  timer = 0;
  score = 0;
  lives = 3;
  level = 1;

  updateUI();

  currentIndex = 0;
  swappedInPass = false;

  randomNumbers();
  renderBars();

  interval = setInterval(() => {
    timer++;
    timerText.textContent = timer;
  }, 1000);

  message.textContent = "Game Started!";
  play(startSound);
}

function checkAnswer(choice) {
  if (numbers.length === 0) return;

  play(clickSound);

  let a = numbers[currentIndex];
  let b = numbers[currentIndex + 1];
  let shouldSwap = a > b;

  if (choice === shouldSwap) {
    score += 10;

    if (shouldSwap) {
      [numbers[currentIndex], numbers[currentIndex + 1]] =
      [numbers[currentIndex + 1], numbers[currentIndex]];
      swappedInPass = true;
    }

    message.textContent = "Correct!";
    play(correctSound);

  } else {
    score -= 5;
    lives--;

    message.textContent = "Wrong!";
    play(wrongSound);

    if (lives <= 0) {
      clearInterval(interval);
      message.textContent = "💀 GAME OVER!";
      play(gameOverSound);
      return;
    }
  }

  currentIndex++;
  updateUI();

  if (currentIndex >= numbers.length - 1) {

    if (!swappedInPass) {
      level++;
      play(levelUpSound);

      message.textContent = "Level Up!";
      randomNumbers();
      currentIndex = 0;
      swappedInPass = false;
      renderBars();
      return;
    }

    currentIndex = 0;
    swappedInPass = false;
  }

  renderBars();
}
