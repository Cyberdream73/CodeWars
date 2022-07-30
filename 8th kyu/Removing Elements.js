/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

// ANSWER //

function removeEveryOther(arr){
    let answer = []
    for (let i = 2; i < arr.length + 2; i++) {
      if ( i % 2 === 0) { answer.push(arr[i-2])}
    }
    return answer;
  }