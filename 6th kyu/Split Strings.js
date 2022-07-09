/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/ 

// ANSWER //

function solution(str){
    let answer = []
    if (str == '') { return answer;}
    for (let i = 0; i < str.length; i += 2) {
      answer.push(str.slice(i, i+2))
    }
    if (answer[answer.length-1].length === 1) { answer[answer.length-1] += '_'}
    return answer;
  }