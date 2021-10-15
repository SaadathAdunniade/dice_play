var scores, roundscore, activeplayer, dice;
scores=[ 0, 0 ] ;
roundscore= 0 ;
activeplayer= 0 ;
// dice = Math.floor ( Math.random () *6 ) +1 ;
// console.log ( dice ) ;
var gamePlay = true;

document.querySelector ( "#current-"+activeplayer ).innerHTML = "<en>" +dice+ "</en>" ;
var score=document.querySelector("#score-0");
console.log(score.textContent);

var dicedom=document.querySelector(".dice-1");
console.log(dicedom);

document.querySelector("#dice-img").style.display="none";

document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;

document.querySelector(".btn-roll").addEventListener("click", function(){
    if(gamePlay){
    var dicedom=document.querySelector("#dice-img");
    dicedom.style.display="block";
    dice = Math.floor ( Math.random () *6 ) +1 ;
    dicedom.src="./img/dice-"+ dice +".png";

    if ( dice !== 1 ){
        roundscore = roundscore + dice;
        document.querySelector("#current-"+activeplayer).textContent=roundscore;
    } else {
        activeplayer == 0 ? (activeplayer = 1 ) : (activeplayer = 0) ;
        roundscore = 0;
        document.querySelector("#current-0").textContent = 0 ;
        document.querySelector("#current-1").textContent = 0 ;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display="none";
    }
}
});



document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlay){
scores[activeplayer] += roundscore;
document.querySelector("#score-"+activeplayer).textContent = scores[activeplayer];

if(scores[activeplayer] >= 20){
document.querySelector("#name-" +activeplayer).textContent="winner";
document.querySelector(".dice").style.display = "none";
document.querySelector(".player-" + activeplayer + "-panel").classList.add("winner");
document.querySelector(".player-" + activeplayer + "-panel").classList.remove("active");
gamePlay = false;
}else{
next();
}
    }
});

function next(){
activeplayer==0? activeplayer=1 : activeplayer = 0;
roundscore = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");
document.querySelector(".dice").style.display = "none"; 
}


document.querySelector(".btn-new").addEventListener("click", function(){
    newGame();
});

function newGame(){
    scores = [0, 0];
    activeplayer = 0;
    randomscore = 0;
   gamePlay = true;
   document.querySelector(".dice").style.display="none";
   document.querySelector("#name-0").textContent = "player 1" ;
   document.querySelector("#name-1").textContent = "player 2" ;

   document.querySelector("#score-0").textContent=0;
   document.querySelector("#score-1").textContent=0;
   document.querySelector("#current-0").textContent = 0 ;
   document.querySelector("#current-1").textContent = 0 ;

   document.querySelector(".player-" + activeplayer + "-panel").classList.remove("active");
   document.querySelector(".player-" + activeplayer + "-panel").classList.remove("winner");
   document.querySelector(".player-0-panel").classList.add("active");
   document.querySelector(".player-1-panel").classList.remove("active");
}

