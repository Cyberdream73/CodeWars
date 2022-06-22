/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

// ANSWER //

function bmi(weight, height) {
    let answer = weight/Math.pow(height, 2)
    if (answer > 30) {
      return 'Obese';
    }else if (answer > 25) {
      return 'Overweight';
    }else if (answer > 18.5) {
      return 'Normal';
    }else {
      return 'Underweight';
    }
  }