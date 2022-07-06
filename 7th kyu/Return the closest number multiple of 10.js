/* Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40

*/

// ANSWER //

const closestMultiple10 = num => {
    let remainder = num % 10
    return remainder < 5 ? num - remainder: num + 10 - remainder;
  };