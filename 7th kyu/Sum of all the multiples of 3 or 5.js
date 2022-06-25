/* 
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

*/

// ANSWER //

function findSum(n) {
    let answer = 0
    while (n > 0) {
      if (n % 3 == 0 || n % 5 == 0) { answer += n}
      n--
    }
    return answer;
  }