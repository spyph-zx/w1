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
{gif:"GIF1_URL",text:"Do you love me? ❤️"},
{gif:"GIF2_URL",text:"Think again wisely 🥺"},
{gif:"GIF3_URL",text:"Are you really sure? 💔"},
{gif:"GIF4_URL",text:"Last chance ❤️"},
{gif:"GIF5_URL",text:"No escape now 😌"}
];

function loadScene(){
questionCard.style.opacity="0";

setTimeout(()=>{
gif.src=scenes[step].gif;
question.innerText=scenes[step].text;
questionCard.style.opacity="1";
},300);
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
}else{
moveNoRandom();
}
};

function moveNoRandom(){
const maxX=window.innerWidth-120;
const maxY=window.innerHeight-80;

const randomX=Math.random()*maxX;
const randomY=Math.random()*maxY;

no.style.position="fixed";
no.style.left=randomX+"px";
no.style.top=randomY+"px";
}

const petalsContainer=document.getElementById("petals-container");

for(let i=0;i<25;i++){
let petal=document.createElement("img");
petal.src="https://pngimg.com/uploads/rose_petals/rose_petals_PNG6768.png";
petal.classList.add("petal");
petal.style.left=Math.random()*100+"%";
petal.style.animationDuration=(4+Math.random()*6)+"s";
petal.style.top=Math.random()*-600+"px";
petalsContainer.appendChild(petal);
}
