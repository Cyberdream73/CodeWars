/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

// ANSWER //

function humanReadable (seconds) {
    let hours = '0'
    let minutes = '0'
    let s = '0'
    while (seconds >= 0) {
      if (seconds >= 3600) {
      hours = Math.floor(seconds / 3600)
      seconds -= hours * 3600
    } else if (seconds >= 60) {
      minutes = Math.floor(seconds / 60)
      seconds -= minutes * 60
    } else {
      s = seconds
      seconds -= 60
    }
    }
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${s < 10 ? '0' + s : s}`;
  }