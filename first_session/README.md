# First session

We created an application for the following exercise:

There is an optimal way to play this game that works like this, given upperBound as the upper bound, lowerBound as the lower bound, and guess as the guess:

1. Initialize the starting values:

⋅⋅- guess as half of the upperBound
⋅⋅- lowerBound as 0
2. Execute guessMyNumber with guess:

⋅⋅- If the guess was too high, repeat (2) where:
⋅⋅⋅⋅- the new guess is half of the difference of guess and lowerBound
⋅⋅⋅⋅- the new upperBound is guess
⋅⋅- If the guess was too low, repeat (2) where:
⋅⋅⋅⋅- The new guess is half of the difference of upperBound and guess
⋅⋅⋅⋅- The new lowerBound is guess
⋅⋅- If the guess was correct stop.

Your task is to write a function that implements the above algorithm to play the game on your behalf. The first thing that you will need to do is create another version of guessMyNumber that returns output that will be easier for another function to work with, e.g. use 1 for too high, -1 for too low, 0 for correct.

Relative to upperBound, how many guesses does it take on average to guess correctly?