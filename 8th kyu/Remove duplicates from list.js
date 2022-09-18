/* Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

// ANSWER //

function distinct(a) {
    let answer = []
    for (let i = 0; i < a.length; i++) {
      if (answer.indexOf(a[i]) === -1) { answer.push(a[i])}
    }
    return answer;
  }