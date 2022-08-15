/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

*/

// ANSWER //

function removeDuplicateWords (s) {
    let arrS = s.split(' ')
    let answer = []
    for (let i = 0; i < arrS.length; i++) {
      if (answer.indexOf(arrS[i]) === -1) { answer.push(arrS[i])}
    }
    return answer.join(' ');
  }