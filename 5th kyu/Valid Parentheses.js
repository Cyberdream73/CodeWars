/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

// ANSWER //

function validParentheses(parens) {
    let counter = 0
    let answer
    for (let i = 0; i < parens.length; i++) {
      if (counter < 0) { answer = false }
      if (parens[i] === '(') { 
        counter++
      }else {
        counter--
      }
    }
    return answer == false ? false : counter === 0;
  }