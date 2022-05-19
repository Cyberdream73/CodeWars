/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

// ANSWER //

function reverseWords(str) {
    let reversedStr =  str.split(' ');
    reversedStr = reversedStr.map( wd => wd.split('').reverse());
    reversedStr = reversedStr.map( wd => wd.join(''));
    return reversedStr.join(' ');
  }