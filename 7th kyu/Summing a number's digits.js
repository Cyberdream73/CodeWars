/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

*/

// ANSWER //

function sumDigits(number) {
    console.log(number)
    if (number < 0) { number *= -1 } 
    let strNumber = number.toString()
    return strNumber.split('').reduce((acc, current) => acc += parseInt(current), 0);
  }