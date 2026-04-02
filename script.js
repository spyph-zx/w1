const intro=document.getElementById("intro");
const questionBox=document.getElementById("questionBox");
const gif=document.getElementById("gif");
const question=document.getElementById("question");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const success=document.getElementById("success");
const music=document.getElementById("bgMusic");

let step=0;

const data=[
{gif:"GIF1_URL",text:"Do you love me? ❤️"},
{gif:"GIF2_URL",text:"Think again wisely 🥺"},
{gif:"GIF3_URL",text:"Are you sure? 💔"},
{gif:"GIF4_URL",text:"Last chance ❤️"},
{gif:"GIF5_URL",text:"No escape now 😌"}
];

intro.onclick=()=>{
music.play();
intro.style.display="none";
questionBox.classList.remove("hidden");
load();
}

function load(){
gif.src=data[step].gif;
question.innerText=data[step].text;
}

yes.onclick=()=>{
questionBox.classList.add("hidden");
success.classList.remove("hidden");
}

no.onclick=()=>{
if(step<4){
step++;
load();
}else{
let x=Math.random()*200-100;
let y=Math.random()*100-50;
no.style.transform=`translate(${x}px,${y}px)`;
}
}
