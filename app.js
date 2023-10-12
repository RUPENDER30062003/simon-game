let gameseq=[];
let userseq=[];
let highestscore=0;

let btn=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false) {
      console. log("game is started");
      started=true;
      levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
  userseq=[];
  level++;
  h2.innerText=`Level${level}`;

  let randIdx = Math.floor(Math.random()*4);
  let randColor = btn[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
//   console.log(randIdx);
//   console.log(randColor);
//   console.log(randBtn);

  // random btn choose //
  gameseq.push(randColor);
  console.log(gameseq);
  gameFlash(randBtn);
}

function checkAns(idx){

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML=`Game Over ! Your score was <b>${level-1}<b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){document.querySelector("body").style.backgroundColor='white';},150)
        if(level-1>highestscore){highestscore=level-1;}
        document.querySelector("h3").innerHTML=`Your highest score:${highestscore}`;
        reset();
    }
    
}

function btnPress(){

    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
