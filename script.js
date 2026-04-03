const intro=document.getElementById("intro");
const questionBox=document.getElementById("questionBox");
const gif=document.getElementById("gif");
const question=document.getElementById("question");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const success=document.getElementById("success");
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

let step=0;

const data=[
{
gif:"GIF1_URL",
text:"Do you love me? ❤️"
},
{
gif:"GIF2_URL",
text:"Think again wisely 🥺"
},
{
gif:"GIF3_URL",
text:"Are you really sure? 💔"
},
{
gif:"GIF4_URL",
text:"Last chance ❤️"
},
{
gif:"GIF5_URL",
text:"No escape now 😌"
}
];

function loadQuestion(){
gif.src=data[step].gif;
question.innerText=data[step].text;
}

intro.onclick=()=>{
music.play();
intro.style.display="none";
questionBox.classList.remove("hidden");
loadQuestion();
};

yes.onclick=()=>{
questionBox.classList.add("hidden");
success.classList.remove("hidden");
};

no.onclick=()=>{
if(step<4){
step++;
loadQuestion();
}else{
moveNo();
}
};

function moveNo(){
let x=Math.random()*200-100;
let y=Math.random()*100-50;
no.style.transform=`translate(${x}px,${y}px)`;
}

musicBtn.onclick=()=>{
if(music.paused){
music.play();
}else{
music.pause();
}
};

const petalsContainer=document.getElementById("petals-container");

for(let i=0;i<20;i++){
let petal=document.createElement("img");

/* CHANGE PETAL PNG HERE */
petal.src="https://pngimg.com/uploads/rose_petals/rose_petals_PNG6768.png";

petal.classList.add("petal");
petal.style.left=Math.random()*100+"%";
petal.style.animationDuration=(5+Math.random()*5)+"s";
petal.style.top=Math.random()*-500+"px";

petalsContainer.appendChild(petal);
}
