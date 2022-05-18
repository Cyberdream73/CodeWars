/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

Implement a function that determines whether a string that contains only letters is an isogram. 

Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

// ANSWER //

function isIsogram(str){
    let arr = (str.toLowerCase()).split('');
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if ((arr.slice(i+1)).includes((str.toLowerCase())[i])) {
          counter--;
          }
    }
    return counter == 0 ? true : false;
  }