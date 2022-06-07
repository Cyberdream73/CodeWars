/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// ANSWER //

function find_average(array) {
    return array.length > 0 ? array.reduce( (acc, current) => acc += current, 0)/array.length : 0;
  }