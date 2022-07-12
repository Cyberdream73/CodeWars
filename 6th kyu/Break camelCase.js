/* Complete the solution so that the function will break up camel casing, using a space between words.

Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// ANSWER //

function solution(string, index = 0) {
    let charUpper = []
    for (let i = 0; i < string.length; i++) {
      string[i].toUpperCase() === string[i] ? charUpper.push(` ${string[i]}`) : charUpper.push(string[i])
    }
    return charUpper.join('');
  }