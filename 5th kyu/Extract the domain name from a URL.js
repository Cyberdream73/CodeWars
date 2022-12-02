/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

// ANSWER //

function domainName(url){
    let answer
    let firstSplit = url.split('www.')
    let secondSplit = url.split('://')
    if (url.includes('www') && url.includes('://')) {
      answer = firstSplit[1].split('.')
    }else if(url.includes('www')) {
      answer = firstSplit[1].split('.')
    }else if(url.includes('://')) {
      answer = secondSplit[1].split('.')
    }else {
      answer = url.split('.')
    }
    return answer[0];
  }