const s = require('fs').readFileSync(0, 'utf-8').trim();

// Write your solution here.
// Print "true" if s can be built by repeating some substring of it two
// or more times, otherwise print "false".


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

    let newS = s + s;
     newS = newS.slice(1, newS.length - 1);
    return newS.includes(s);
    
};


console.log(repeatedSubstringPattern(s))