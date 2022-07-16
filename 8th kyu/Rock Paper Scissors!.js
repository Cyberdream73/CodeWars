/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

// ANSWER //

const rps = (p1, p2) => {
    let choices = [ 'scissors', 'rock', 'paper']
    if (p1 === p2) return 'Draw!';
    if (p1 === choices[0] && p2 === choices[2]) return 'Player 1 won!';
    if (p2 === choices[0] && p1 === choices[2]) return 'Player 2 won!';
    return choices.indexOf(p1) > choices.indexOf(p2) ? 'Player 1 won!' : 'Player 2 won!';
  };