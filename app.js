let gameSeq=[];
let userSeq=[];
let highScore=0;
let btns=["red","blue","purple","orange"];

let start=false;
let level=0;
let h3= document.querySelector("h3");
let h4= document.querySelector("h4");

document.addEventListener("keypress",function(){
  
if(start==false){
    console.log("Game started <3");
    start=true;
    levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( ()=>{
        btn.classList.remove("userFlash");
    },150);
}


function levelUp(){

userSeq=[];
level++;
h3.innerText= `Level ${level}`;
 //random button generate
let rIdx=Math.floor((Math.random()*4));
let rColor=btns[rIdx];
let rBtn=document.querySelector(`.${rColor}`);

gameSeq.push(rColor);
console.log(gameSeq);
//calling function, sending random btn as arg
btnFlash(rBtn);
}

function checkAns(idx){
   
    if(userSeq[idx]===gameSeq[idx]){

        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
       }else{
           if(highScore<level){
           highScore=level;
           }

        document.querySelector("body").style.backgroundColor="red";
           setTimeout(function(){
               document.querySelector("body").style.backgroundColor="white";
           },200);
        h3.innerText= `Game over :( Your score was ${level}  Press any key to restart`;
        h4.innerText=`High Score: ${highScore}`
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

   let userColor= btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);

   checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(key of allBtns){
    key.addEventListener("click", btnPress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}