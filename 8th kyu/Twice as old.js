/* Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

// ANSWER //

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let differenceAge = dadYearsOld - 2 * sonYearsOld
    return differenceAge < 0 ? -1 * differenceAge : differenceAge;
  }