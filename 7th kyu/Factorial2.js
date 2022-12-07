/* Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial 

*/

// ANSWER //

function factorial(n){
    if (n <= 1 ) { return 1;}
    return factorial(n-1)*n;
  }