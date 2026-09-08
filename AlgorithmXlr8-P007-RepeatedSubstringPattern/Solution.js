const s = require('fs').readFileSync(0, 'utf-8').trim();

// Write your solution here.
// Print "true" if s can be built by repeating some substring of it two
// or more times, otherwise print "false".


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

    for(let i =1; i<s.length; i++ ){
        if(s.length % i !== 0){
            continue;
        }
        let pattern = s.slice(0, i); 
        let repeated = "";
        for(let k =0; k < s.length/i; k++){
              repeated = repeated + pattern;
        }

        if(repeated === s){
            return true;
        }
    }
    return false
    
};


console.log(repeatedSubstringPattern(s))