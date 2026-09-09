const s = require('fs').readFileSync(0, 'utf-8').replace(/\n$/, '');

// Write your solution here.
// Print s with the order of its words reversed, collapsing any leading,
// trailing, or multiple spaces down to single spaces between words.
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr =[];
    let word = "";
    let reversed = [];

    for(let i=0; i< s.length; i++){
        if(s[i] !== " " ){
            word = word + s[i];
        }else if(s[i] === " " ){
            if(word){
                arr.push(word);
            }
            word = ""
        }
    }
    if(word){
                arr.push(word);
            }

  for(let i= arr.length-1 ; i>=0; i-- ){
    reversed.push(arr[i]);
  }

  return reversed.join(" ")
    
};

console.log(reverseWords(s))