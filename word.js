
  this.wordCheck = function() {
        var stillBlank = false;
        for(var i=0; i<that.letters.length; i++) {
          if(that.letters[i] == ' _ '){
            var stillBlank = true;
          }
        }
        if(stillBlank!=true){
        if(this.letters.every(function(lttr){
          return lttr.appear === true;
        }))
        {
           this.wordFound = true;
          return true;
         }
     
        return this.wordFound;
       };
     
       this.checkLetter = function(guessedLetter) {
         var letterResult = 0;
          for(var i = 0; i<that.letters.length; i++){
            if(letters[i] === guessedLetter) {
              letters[i].appear = true;
              letterResult = 1;
            }
        this.letters.forEach(function(lttr){
          if(lttr.letter === guessedLetter){
            lttr.appear = true;
            letterResult++;
           }
        })
        
         return letterResult;
    }