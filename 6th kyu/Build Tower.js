/* Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]


*/

// ANSWER //

function towerBuilder(nFloors) {
    let answer = []
    let floorFull = '*'.repeat(nFloors*2-1)
    answer.push(floorFull)
    let counter = 1
    while (floorFull.includes('**')) {
      floorFull = ' '.repeat(counter) + floorFull.slice(counter, -counter) + ' '.repeat(counter)
      counter++
      answer.push(floorFull)
    }
    return answer.reverse();
  }
  