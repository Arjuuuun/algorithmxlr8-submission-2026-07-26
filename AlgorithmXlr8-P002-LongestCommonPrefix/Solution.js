const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(data[0]);
const strs = data.slice(1, 1 + n);

// Write your solution here.
// Print the longest common prefix among all strings in strs, or an
// empty line if there is none.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let ans = strs[0];
    for(i of strs){
       ans = commonPrefixOfTwo(ans, i)
    };

    return ans;
    
};


function commonPrefixOfTwo(ans, str) {
    let result = "";
    for (let j = 0; j < ans.length && j < str.length; j++) {
        if (ans[j] === str[j]) {
            result += ans[j];
        } else {
            break;
        }
    }
    return result;
}

console.log(longestCommonPrefix(strs))