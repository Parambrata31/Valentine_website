const noBtn = document.getElementById("noBtn");



/* runaway button */

noBtn.addEventListener("mouseover", () => {

let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 50);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

});


/* heart generator */

const heartContainer = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");
heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left = Math.random()*100 + "vw";

heart.style.animationDuration = (3 + Math.random()*3) + "s";

heartContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,300);


/* yes click */

function yesClicked(){

const explosion = document.getElementById("explosion");
const music = document.getElementById("bgMusic");

if(music){
music.play();
}

/* create explosion hearts */

for(let i=0;i<40;i++){

let heart = document.createElement("div");
heart.className="explode-heart";
heart.innerHTML="❤️";

/* random direction */

let x = (Math.random()*600 - 300) + "px";
let y = (Math.random()*600 - 300) + "px";

heart.style.setProperty("--x",x);
heart.style.setProperty("--y",y);

explosion.appendChild(heart);

setTimeout(()=>{
heart.remove();
},1000);

}

/* show loading after explosion */

setTimeout(()=>{

document.body.innerHTML = `
<div class="loading">
<h2>Preparing your Valentine perks...</h2>
<div class="loading-heart">❤️</div>
</div>
`;

setTimeout(()=>{
window.location.href="perks.html";
},3000);

},1000);

}

function noClicked(){

const msg = document.getElementById("noMessage");

msg.style.display="block";

setTimeout(()=>{
msg.style.display="none";
},3000);

}

