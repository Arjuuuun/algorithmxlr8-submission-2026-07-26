const s = require('fs').readFileSync(0, 'utf-8').trim();

// Write your solution here.
// Print the index of the first non-repeating character in s, or -1 if
// none exists.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let map = new Map();

    for(let i =0; i<s.length; i++){
        if(map.has(s[i])){
             map.set(s[i], (map.get(s[i])+1))
           
        }else{
             map.set(s[i],1)
        }
    }

    for(let i =0; i<s.length; i++){
       if(map.has(s[i])){
          if(map.get(s[i]) === 1){
            return i
          }
       }
    }
    return -1;
    
};

console.log(firstUniqChar(s))