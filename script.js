const playBtn = document.getElementById("playBtn");
const bgMusic = document.getElementById("bgMusic");

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const successScreen = document.getElementById("successScreen");

const gif = document.getElementById("gif");
const questionText = document.getElementById("questionText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let current = 0;

const questions = [
  {
    gif: "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
    text: "Do you love me? ❤️"
  },
  {
    gif: "https://media.giphy.com/media/l2R0aKwejYr8ycKAg/giphy.gif",
    text: "Think again wisely 🥺"
  },
  {
    gif: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    text: "Are you really sure? 💔"
  },
  {
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    text: "Last chance... think from heart ❤️"
  },
  {
    gif: "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
    text: "No escape now 😌"
  }
];

function loadQuestion() {
  gif.src = questions[current].gif;
  questionText.textContent = questions[current].text;
}

playBtn.onclick = () => {
  bgMusic.play();
  startScreen.classList.remove("active");
  questionScreen.classList.add("active");
  loadQuestion();
};

yesBtn.onclick = () => {
  questionScreen.classList.remove("active");
  successScreen.classList.add("active");
};

noBtn.onclick = () => {
  if (current < 4) {
    current++;
    loadQuestion();
  } else {
    moveButton();
  }
};

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
