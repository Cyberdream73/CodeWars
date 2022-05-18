/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

// ANSWER //

function solution(str, ending){
    let arrStr = str.split('');
    let arrEnding = ending.split('');
    for (let i = 0; i < ending.length; i++) {
      if ((!(arrStr.pop() == arrEnding.pop()))) {
        return false;
      }
    }
    return true;
  }