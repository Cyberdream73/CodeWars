/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.

*/ 

// ANSWER //

function largestPairSum (numbers) {
    let answer = numbers.sort( (a,b) => b-a)
    return answer[0] + answer[1];
  }