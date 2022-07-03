/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// ANSWER //

function pigIt(str){
    let arr = str.split(' ')
    return arr.map( el => ['!','(',')','?'].includes(el) ? el : el = el.slice(1,) + el[0] + 'ay' ).join(' ');
  }