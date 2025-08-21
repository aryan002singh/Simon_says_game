let gameseq=[];
let userseq=[];
let btns=['yellow','red','purple','green'];
let started=false;
let level=0;

let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
if(started==false){
    console.log('game is started');
    started=true;
    h2.innerText = `Level ${level}`;
h2.classList.add("level-pop");
setTimeout(() => h2.classList.remove("level-pop"), 400);


    levelup();
}
});

function gameflash(btn){
btn.classList.add('gameflash');
setTimeout(function(){
    btn.classList.remove('gameflash');
},250);
};
function userflash(btn){
btn.classList.add('userflash');
setTimeout(function(){
    btn.classList.remove('userflash');
},250);
};
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level${level}`;
//random btn choose
let randIdx=Math.floor(Math.random()*btns.length);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randbtn);
// console.log(randColor);
gameseq.push(randColor);
console.log(gameseq);
    gameflash(randbtn);
};
function checkans(idx){
    // console.log('curr level: ',level);
    
    if(userseq[idx]===gameseq[idx]){
        // console.log('same value');
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over: Your score was <b>${level}</b>
        <br>press any key to restart.`;
        document.querySelector('body').style.backgroundColor='red';
        document.body.classList.add('shake');
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
            document.body.classList.remove('shake');
        },250);
        reset();
    }
};
function btnPress(){
    let btn=this;
    userflash(btn);
//     console.log(this);
let usercolor=btn.getAttribute('id');
userseq.push(usercolor);
checkans(userseq.length-1);
};
let allbtns=document.querySelectorAll('.btn');
for(let btn of allbtns){
    btn.addEventListener('click',btnPress)
};
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
