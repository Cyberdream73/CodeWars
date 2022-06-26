/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

// ANSWER //

function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetROT13 = ''
    let answer = ''
    for (let i = 0; i<alphabet.length; i++) {
      i <= 12 ? alphabetROT13 += alphabet[i+13] : alphabetROT13 += alphabet[i-13] 
    }
    for (let j = 0; j<message.length; j++) {
      if (message[j] == message[j].toUpperCase()) {
         alphabet.indexOf(message[j].toLowerCase()) != -1 ? answer += alphabetROT13[alphabet.indexOf(message[j].toLowerCase())].toUpperCase() : answer += message[j]
      }else {
         alphabet.indexOf(message[j]) != -1 ? answer += alphabetROT13[alphabet.indexOf(message[j])] : answer += message[j]
      }   
    }
    return answer;
  }