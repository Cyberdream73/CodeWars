/* A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
 
*/

// ANSWER //

function solution(list){
    let answer = ''
    let tmpArr = []
    let counter = 0
    for (let i = 0; i < list.length; i++) {
      counter = i
      while (list[counter]+1 == list[counter+1]) {
        tmpArr.push(list[counter])
        tmpArr.push(list[counter+1])
        counter++
      }
      if (tmpArr.length == 2) {
        tmpArr = []
        answer += list[i] + ','
      }else if (tmpArr.length > 2) {
        answer += tmpArr[0] + '-' + tmpArr[tmpArr.length-1] + ','
        i = counter
        tmpArr = []
      }else {
        answer += list[i] + ','
      } 
    }
    return answer.slice(0,-1);
  }