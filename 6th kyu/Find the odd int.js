/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

// ANSWER //

function findOdd(A) {
    let arr = []
    let arrCounter = A.length
    while (arrCounter > 0) {
      arr.push([])
      arrCounter--
    }
    for (let i = 0; i<A.length; i++) {
      for (let j = 0; j<A.length; j++) {
        if (A[i] == A[j]) { 
          arr[i].push(A[i])
        }
      }
    }
    return arr.filter(el => el.length % 2 == 1)[0][0];
  }