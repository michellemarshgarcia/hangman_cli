var Word = require('./word.js');
 

require('events').EventEmitter.prototype._maxListeners = 50;

 var hangman = {
   wordBank: Game.newWord.wordList,
   wordsWon: 0,
 }
 var hangmanFIx = {
     }]).then(function(ltr) {
       var letterReturned = (ltr.chosenLtr).toLowerCase();
     }
       var guessedAlready = false;
         for(var i = 0; i<that.guessedLetters.length; i++){
          if(letterReturned === guessedLetters[i]){
          if(letterReturned === that.guessedLetters[i]){
             guessedAlready = true;
           }
         }
         if(guessedAlready === false){
          guessedLetters.push(letterReturned);
          that. guessedLetters.push(letterReturned);
         console.log('You chose: ' + letterReturned);
         } else{
         
    var hangman = {
          console.log('Nope! You guessed wrong.');
          that.guessesRemaining--;
          console.log('Guesses remaining:  + that.guessesRemaining);
          console.log(that.currentWrd.wordRender());
          console.log(that.currentWord.wordRender());
       } 
       else{
         console.log('Yes! You guessed right!');
         
          if(that.currentWord.didWeFindTheWord === true){
          if(that.currentWord.didWeFindTheWord() === true){
             console.log('Congratulations! You won the game!!!');
            that.startGame();
          
           } else{
        
            console.log('Guesses remaining: ' + that.guessesRemaining);
            console.log(that.currentWrd.wordRender());
            console.log(that.currentWord.wordRender());
           }
       }
       if(that.guessesRemaining > 0 && that.currentWord.wordFound === false){
        {
                        that.keepPromptingUser();
                      }else if(that.guessesRemaining === 0){
                        console.log('Game over!');
                        console.log('The word you were guessing was: ' + that.currentWord.word);
                      }
                    } 
                    else{
                        console.log("You've guessed that letter already. Try again.")
                        that.keepPromptingUser();
                       }
                  }
                  if(that.guessesRemaining > 0 && that.currentWord.wordFound === false) {
                    that.keepPromptingUser();
                  }
                  else if(that.guessesRemaining === 0){
                   console.log('Game over!');
                    console.log('The word you were guessing was: ' + that.currentWord.word);
                  } 
                  else{
                    console.log(that.currentWord.wordRender());
                  }
                 });
               }
             }
            