const s = require('fs').readFileSync(0, 'utf-8').trim();

// Write your solution here.
// Print the longest palindromic substring of s.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

     let start = 0, maxLen = 0;

    function expandFromCenter(left,right){
        while(left >= 0 && right <s.length && s[left] === s[right]){
            left--;
            right++;
        };
        return right - left - 1;
    }

    for(let i=0; i<s.length;i++){
        let len1 = expandFromCenter(i,i)  //odd
        let len2 = expandFromCenter(i,i+1) //even

        let len = Math.max(len1,len2);

        if(len > maxLen){
            maxLen = len;
            start = i -  Math.floor((len-1)/2)
        }
    }
    return s.slice(start, start + maxLen)
};

//cbbd

console.log(longestPalindrome(s))