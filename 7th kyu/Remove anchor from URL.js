/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/ 

// ANSWER //

function removeUrlAnchor(url){
    let answer = ''
    while (url.length>0) {
      if (url[0] != '#') {
        answer += url[0]
        url = url.slice(1,)
      }else {
        break;
      }
    }
    return answer;
  }