const envelope=document.getElementById("envelope"),openingScreen=document.getElementById("openingScreen"),mainContent=document.getElementById("mainContent"),musicBtn=document.getElementById("musicBtn"),bgMusic=document.getElementById("bgMusic"),photoModal=document.getElementById("photoModal"),modalImage=document.getElementById("modalImage"),modalTitle=document.getElementById("modalTitle"),modalDescription=document.getElementById("modalDescription"),modalClose=document.getElementById("modalClose"),memoryButton=document.getElementById("memoryButton"),memoryResult=document.getElementById("memoryResult");

envelope.addEventListener("click",()=>{envelope.classList.add("open");createConfetti();setTimeout(()=>{openingScreen.classList.add("hide");mainContent.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});startMusic()},1300)});

let musicPlaying=false;
function startMusic(){bgMusic.volume=.25;bgMusic.play().then(()=>{musicPlaying=true;musicBtn.textContent="🔊"}).catch(()=>{musicPlaying=false})}
musicBtn.addEventListener("click",()=>{if(musicPlaying){bgMusic.pause();musicPlaying=false;musicBtn.textContent="🎵"}else{bgMusic.play();musicPlaying=true;musicBtn.textContent="🔊"}});

document.querySelectorAll(".memory-card").forEach(card=>{card.addEventListener("click",()=>{const image=card.querySelector("img");modalImage.src=image.src;modalTitle.textContent=card.dataset.title;modalDescription.textContent=card.dataset.description;photoModal.classList.add("active");document.body.style.overflow="hidden"})});
function closeModal(){photoModal.classList.remove("active");document.body.style.overflow=""}
modalClose.addEventListener("click",closeModal);
photoModal.addEventListener("click",e=>{if(e.target===photoModal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const memories=["that random conversation that somehow lasted for hours 😂","the day we laughed at something absolutely stupid 🥹","that one photo we definitely should not have taken 😭","our random late-night conversations 🌙","the moment we realised how weird we actually are 😂","that completely unplanned day that became a core memory 💗","all those tiny moments that somehow became important ♡","our first selfie 📸","that inside joke nobody else understands 😂","another random day that somehow became special 🌷","two years of chaos and still counting 🎀","one of those memories I never want to forget 💌"];
memoryButton.addEventListener("click",()=>{const randomIndex=Math.floor(Math.random()*memories.length);memoryResult.style.opacity="0";setTimeout(()=>{memoryResult.textContent=memories[randomIndex];memoryResult.style.opacity="1"},200)});

function createConfetti(){for(let i=0;i<90;i++){const confetti=document.createElement("div");confetti.classList.add("confetti");confetti.style.left=Math.random()*100+"vw";confetti.style.top="-20px";confetti.style.animationDelay=Math.random()*1.5+"s";confetti.style.transform=`rotate(${Math.random()*360}deg)`;confetti.textContent=["♡","✦","●","◆"][Math.floor(Math.random()*4)];document.body.appendChild(confetti);setTimeout(()=>confetti.remove(),4500)}}

const revealElements=document.querySelectorAll(".memory-card,.timeline-item,.thing-card,.big-letter,.remember-card");
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";observer.unobserve(entry.target)}})},{threshold:.12});
revealElements.forEach(element=>{element.style.opacity="0";element.style.transform="translateY(35px)";element.style.transition="opacity .8s ease,transform .8s ease";observer.observe(element)});

document.addEventListener("click",event=>{if(event.target.closest("button")||event.target.closest(".memory-card")||event.target.closest(".envelope"))return;const heart=document.createElement("span");heart.textContent="♡";heart.style.position="fixed";heart.style.left=event.clientX+"px";heart.style.top=event.clientY+"px";heart.style.pointerEvents="none";heart.style.zIndex="9999";heart.style.fontSize="22px";heart.style.color="#d98b9f";heart.style.animation="heartPop 1s ease forwards";document.body.appendChild(heart);setTimeout(()=>heart.remove(),1000)});
const heartStyle=document.createElement("style");heartStyle.textContent=`@keyframes heartPop{0%{transform:translate(-50%,-50%) scale(0);opacity:0}30%{transform:translate(-50%,-80%) scale(1.2);opacity:1}100%{transform:translate(-50%,-150%) scale(.7);opacity:0}}`;document.head.appendChild(heartStyle);
