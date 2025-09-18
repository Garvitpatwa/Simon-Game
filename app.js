let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red","yellow","green","purple"];

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
    }
    levelup();
});

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random() * 4);
    let randcolr = btns[randidx];
    let randBtn = document.querySelector(`.${randcolr}`);
    // console.log(randidx);
    // console.log(randcolr);
    // console.log(randBtn);
    gameseq.push(randcolr);
    console.log(gameseq);
    gameflash(randBtn);
}

function gameflash(btn){ // white flash
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userflash(btn){ // green flash
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}

function checkans(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game over! YOUR SCORE WAS = ${level} press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}