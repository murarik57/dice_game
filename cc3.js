alert("GAME RULES:\n- The game has 2 players, playing in rounds/n- In each turn, a player rolls two dice as many times as he whishes. Each result get added to his ROUND score\n- BUT, if the player rolls a 1 on either dice, all his ROUND score gets lost. After that, it's the next player's turn\n- The player can choose to 'Pass', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn\n-You can set the Winning score yourself by inserting the no. and press hold button or let it by default 20\n- The first player to reach  points on GLOBAL score wins the game");
      
var score,activePlayer,roundScore,gamePlaying,prevRoll;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
 if(gamePlaying){
     var dice1=Math.floor(Math.random()*6+1);
     var dice2=Math.floor(Math.random()*6+1);
    
     //document.querySelector('#current-'+activePlayer).innerHTML=dice;
     document.getElementById('dice1').style.display='block';
     document.getElementById('dice2').style.display='block';
     document.getElementById('dice1').src="dice-"+dice1+".png";
     document.getElementById('dice2').src="dice-"+dice2+".png";
     if(dice1!==1&&dice2!==1){
          roundScore+=dice1+dice2;
          document.querySelector('#current-'+activePlayer).innerHTML=roundScore;
        }
     else{
       document.querySelector('#score-'+activePlayer).innerHTML=0;
       nextPlayer();
      }
      /*if(dice===6&&prevRoll===6){
        document.querySelector('#score-'+activePlayer).innerHTML=0;
        nextPlayer();
        }
      else if(dice !==1){
          roundScore += dice;
          document.querySelector('#current-'+activePlayer).innerHTML=roundScore;
        }
     else{
       document.querySelector('#score-'+activePlayer).innerHTML=0;
       nextPlayer();
      }
    prevRoll=dice;*/
 }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
 if(gamePlaying){
    score[activePlayer] += roundScore;
     var winScore=document.querySelector('.inputText').value || 20;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    if(score[activePlayer]>=winScore){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.getElementById('dice1').style.display='none';
        document.getElementById('dice2').style.display='none';
        document.querySelector('#name-'+activePlayer).classList.add('winner');
        document.querySelector('#name-'+activePlayer).classList.remove('active');
        gamePlaying=false;
          }
    else{
      nextPlayer();
       }
    }
});
document.querySelector('.btn-new').addEventListener('click',function(){
    window.location.reload();
});
function nextPlayer() {
    activePlayer===0? activePlayer=1:activePlayer=0;
    roundScore=0;
    document.querySelector('#current-0').innerHTML=0;
    document.querySelector('#current-1').innerHTML=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice1').style.display='none';
    document.getElementById('dice2').style.display='none';
        }
function init(){
    score=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.querySelector('#dice1').style.display= 'none';
    document.querySelector('#dice2').style.display= 'none';
    document.querySelector('#current-0').innerHTML=0;
    document.querySelector('#current-1').innerHTML=0;
    document.querySelector('#score-0').innerHTML=0;
    document.querySelector('#score-1').innerHTML=0;
    document.querySelector('#name-0').innerHTML='Player 1';
    document.querySelector('#name-1').innerHTML='Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active'); 
    }
