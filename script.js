const intro = document.getElementById("intro");
const questionCard = document.getElementById("questionCard");
const gif = document.getElementById("gif");
const question = document.getElementById("question");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const success = document.getElementById("success");
const music = document.getElementById("bgMusic");

let step = 0;
let lastX = 100;
let lastY = 100;

const scenes = [
  { gif: "gif1.gif", text: "Do you love me? ❤️" },
  { gif: "gif2.gif", text: "Think again wisely 🥺" },
  { gif: "gif3.gif", text: "Are you really sure? 💔" },
  { gif: "gif4.gif", text: "Last chance ❤️" },
  { gif: "gif5.gif", text: "No escape now 😌" }
];

function loadScene() {
  gif.src = scenes[step].gif;
  question.innerText = scenes[step].text;
}

intro.onclick = () => {
  music.play();
  intro.style.display = "none";
  questionCard.classList.remove("hidden");
  loadScene();
};

yes.onclick = () => {
  questionCard.classList.add("hidden");
  success.classList.remove("hidden");
};

no.onclick = () => {
  if (step < scenes.length - 1) {
    step++;
    loadScene();
  } else {
    moveNoButton();
  }
};

function moveNoButton() {
  const rect = no.getBoundingClientRect();

  const btnWidth = rect.width;
  const btnHeight = rect.height;

  const margin = 20;

  const minX = margin;
  const minY = margin;

  const maxX = window.innerWidth - btnWidth - margin;
  const maxY = window.innerHeight - btnHeight - margin;

  let newX, newY, distance;

  do {
    newX = Math.random() * (maxX - minX) + minX;
    newY = Math.random() * (maxY - minY) + minY;

    distance = Math.sqrt(
      Math.pow(newX - lastX, 2) +
      Math.pow(newY - lastY, 2)
    );

  } while (distance < 120);

  lastX = newX;
  lastY = newY;

  no.style.position = "fixed";
  no.style.left = `${newX}px`;
  no.style.top = `${newY}px`;
}

const petalsContainer = document.getElementById("petals-container");

for (let i = 0; i < 55; i++) {
  let petal = document.createElement("div");

  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "%";
  petal.style.animationDuration = (5 + Math.random() * 6) + "s";
  petal.style.top = Math.random() * -800 + "px";

  petalsContainer.appendChild(petal);
}
