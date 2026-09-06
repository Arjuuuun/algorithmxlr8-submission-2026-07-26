const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const a = data[0];
const b = data[1];

// Write your solution here.
// Print the minimum number of times a must be repeated so that b becomes
// a substring of the repeated string, or -1 if it's impossible.
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let repeated = a;
    let count = 1


         while(repeated.length < b.length){
            repeated = repeated + a;
            count ++
         }




    if(repeated.includes(b)){
        return count;
    }

    repeated += a;
count++;

if (repeated.includes(b)) {
    return count;
}

return -1;
    
};

console.log(repeatedStringMatch(a,b))