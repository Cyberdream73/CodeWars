/* When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

Write a function which returns valid rating represented as moons ('o','c','x') in single string.
You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

examples

More examples in test cases.

*/

// ANSWER //

function moonRating(rating) {
    let answer = ''
    console.log(rating)
   while (rating - 2 >= 0) {
     answer += 'o'
     rating = rating - 2
   }
    while (rating - 1.5 >= 0) {
      answer += 'o'
      rating = rating - 1.5
    }
    while (rating - 0.5 >= 0) {
      answer += 'c'
      rating--
    }
    console.log(rating)
    return answer.length < 5 ? answer += 'x'.repeat(5-answer.length) : answer
  }