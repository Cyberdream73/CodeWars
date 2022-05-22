/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.

If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

// ANSWER //

function getSum( a,b )
{
   let arr = [a, b]
   arr.sort( (a,b) => a-b)
   for (let i = arr[0] + 1; i < arr[1]; i++) {
      arr.push(i)
   }
   return a === b ? a : arr.reduce((acc, c) => acc + c, 0)
}
