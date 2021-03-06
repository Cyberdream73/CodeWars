/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. 

The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

// ANSWER //

function toCamelCase(str){
    let arr = []
    let answer = ''
    str.includes('-') ? arr = str.split('-') : arr = str.split('_')
    for (let i = 0; i < arr.length; i++) {
      i == 0 ? answer += arr[i] : answer += arr[i][0].toUpperCase() + arr[i].slice(1,)    
    }
    return answer;
  }