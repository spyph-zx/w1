const intro=document.getElementById("intro");
const questionCard=document.getElementById("questionCard");
const gif=document.getElementById("gif");
const question=document.getElementById("question");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const success=document.getElementById("success");
const music=document.getElementById("bgMusic");

let step=0;

const scenes=[
{gif:"gif1.gif",text:"Do you love me? ❤️"},
{gif:"gif2.gif",text:"Think again wisely 🥺"},
{gif:"gif3.gif",text:"Are you really sure? 💔"},
{gif:"gif4.gif",text:"Last chance ❤️"},
{gif:"gif5.gif",text:"No escape now 😌"}
];

function loadScene(){
gif.src=scenes[step].gif;
question.innerText=scenes[step].text;
}

intro.onclick=()=>{
music.play();
intro.style.display="none";
questionCard.classList.remove("hidden");
loadScene();
};

yes.onclick=()=>{
questionCard.classList.add("hidden");
success.classList.remove("hidden");
};

no.onclick=()=>{
if(step<4){
step++;
loadScene();

if(step===4){
startMovingNo();
}
}
};

function startMovingNo(){
setInterval(()=>{
const btnWidth=90;
const btnHeight=50;

const maxX=window.innerWidth-btnWidth-20;
const maxY=window.innerHeight-btnHeight-20;

const randomX=Math.random()*maxX;
const randomY=Math.random()*maxY;

no.style.position="fixed";
no.style.left=randomX+"px";
no.style.top=randomY+"px";
},900);
}

const petalsContainer=document.getElementById("petals-container");

for(let i=0;i<35;i++){
let petal=document.createElement("div");

petal.classList.add("petal");

petal.style.left=Math.random()*100+"%";
petal.style.animationDuration=(5+Math.random()*6)+"s";
petal.style.top=Math.random()*-800+"px";

petalsContainer.appendChild(petal);
}
