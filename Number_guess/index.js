let randomNo = (Math.floor(Math.random() * 100 + 1));

const userInput   = document.querySelector('#guessfield'); //user input
const submit = document.querySelector('#subt');         // submit
const guessSlot  = document.querySelector('.guesses'); // previous guesses
const remaining = document.querySelector('.lastresult'); //remaining guess
const lowHigh  = document.querySelector('.low_high'); // Guess is low or high
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let playGame = true;


if(playGame){
   submit.addEventListener('click', function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      // console.log(guess);
      vaildGuess(guess);
   });
}

// ===== number vaild or not ====
function vaildGuess(guess){
   if(isNaN(guess)){
      alert('PLEASE ENTER VALID NUMBER');
   }
   else if(guess < 1){
      alert("Enter number bigger than one");
   }
   else if(guess > 100){
      alert('Enter number smaller than one');
   }
   else{
      prevGuess.push(guess);
      if(numGuess === 11){
         displayGuess(guess);
         displayMassage(`Game over,Random Number was  ${randomNo} `);
         Endgame();
      }
      else{
         checkGuess(guess);
         displayGuess(guess);
      }
   }
}

// ==== check number is low high and print msg ====
function checkGuess(guess){

   if(guess === randomNo){
      displayMassage('You guessed it right ')
      Endgame();
   }
   else if( guess < randomNo){
      displayMassage('Number is Smaller ');
   }
   else if( guess > randomNo){
      displayMassage('Number is bigger ')
   }
} 
// === msg foe print/clean up guess ===
function displayGuess(guess){
   userInput.value = '';
   guessSlot.innerHTML += `${guess},  `;
   numGuess++;
   remaining.innerHTML = `${11-numGuess} `;
}

// === display guess ===
function displayMassage(massage){
    lowHigh.innerHTML = `<h2>${massage}</h2>`;

}
function Endgame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id ="newgame"> start new game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
 
   const newGameButton  = document.querySelector('#newgame');
   newGameButton.addEventListener('click', function(e){
   randomNo = parseInt(Math.random() * 100 + 1);
   prevGuess = [];
   numGuess = 1;
   guessSlot.innerHTML = '';
   remaining.innerHTML = `${11-numGuess}`;
   userInput.removeAttribute('disable');
   startOver.removeChild(p);

   playGame = true;
  })
}


