/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

// ANSWER //

function high(x){
    let arr = x.split(' ')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let highestScore = 0
    let currentScore = 0
    let highestScoreWord = ''
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        currentScore += alphabet.indexOf(arr[i][j]) + 1
      }
      if (currentScore > highestScore) {
        highestScore = currentScore
        currentScore = 0
        highestScoreWord = arr[i]
  
      }else {
        currentScore = 0
      }
    }
    return highestScoreWord;
  }