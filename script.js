'use strict';

// Selecting ellements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0') ;
const score1El = document.querySelector('#score--1') ;
const diceEl = document.querySelector('.dice') ;
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

// Starting condition
let currentScore , activePlayer , playing , scores ;

const init = function(){
    
    scores = [ 0 , 0];
    activePlayer = 0 ;
    currentScore = 0 ;
    playing = true ;

    currentScore0El.textContent = 0 ;
    currentScore1El.textContent = 0 ;
    score0El.textContent = 0 ;
    score1El.textContent = 0 ;

    diceEl.classList.add('hidden');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');

}

init()

const switchPlayer = function(){
currentScore = 0;
document.querySelector(`#current--${activePlayer}`).textContent = 0; 
activePlayer = activePlayer === 0 ? 1 : 0 ;
player0EL.classList.toggle('player--active');
player1EL.classList.toggle('player--active');
}

// Rolling dice function
btnRoll.addEventListener('click' , function(){
//  generating random dice roll
if (playing){
const dice = Math.trunc(Math.random()*6)+1 ;

// Display dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

//Check for rolled 1
if (dice !== 1) {
currentScore += dice ;
document.querySelector(`#current--${activePlayer}`).textContent = currentScore ; 
} else{

// Switch to next player
switchPlayer();
}
}
}) ;

btnHold.addEventListener('click' , function(){

    if(playing){
// Add current score to the active player score
scores[activePlayer]+= currentScore ;
document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer] ;
    }

// If score >= 100 player wins
if( scores[activePlayer] >= 20){
    playing = false ;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
} else{
// Switch player
switchPlayer();
}
})

btnNew.addEventListener('click' , init )



