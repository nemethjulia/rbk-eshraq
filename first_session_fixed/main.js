function guesser(n) {
    var upperBound = 5;
    var lowerBound = 0;
    var result = guessMyNumber(n);
    while (result !== 0) {
        if (result === -1) {
          var newGuess = Math.floor((n - lowerBound) / 2);
          upperBound = n; 
          n = newGuess;
        } else if (result === 1) {
          var newGuess = Math.ceil((upperBound + n) / 2);
          lowerBound = n; 
          n = newGuess;
        } else {
          return "The number is not in range";
        }
        result= guessMyNumber(n);
    }
    return "We found the random number! " + n;
}

var random = randInt(5);

function guessMyNumber(n) {
  if (n > 5) {
    return undefined;
  } else if (n === random) {
    return 0;
  } else if (n > random) {
    return -1;
  } else {
    return 1;
  }
}

function randInt(n) {
  return Math.floor(Math.random() * (n + 1));
}