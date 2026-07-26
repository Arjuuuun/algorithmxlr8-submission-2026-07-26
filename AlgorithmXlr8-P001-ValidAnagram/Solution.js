const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const s = data[0];
const t = data[1];

// Write your solution here.
// Print "true" if t is an anagram of s, otherwise print "false".
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    for(let i=0; i< s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], (map.get(s[i])+ 1))
        }
        else{
            map.set(s[i],1);
        }
    };

    for(let i=0; i< t.length; i++ ){
         if(map.has(t[i])){
            map.set(t[i], (map.get(t[i]) - 1))
        }
        else{
           return false;
        }
        
    }

    for ( i of map.values()){
        if (i !== 0){
            return false
        }
    }
    return true;
    
};

console.log(isAnagram(s,t))