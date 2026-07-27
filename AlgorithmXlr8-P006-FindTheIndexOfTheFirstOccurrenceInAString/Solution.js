const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const haystack = data[0];
const needle = data[1];

// Write your solution here.
// Print the index of the first occurrence of needle in haystack, or -1
// if needle does not occur in haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let matched = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                matched = false;
                break; // stop checking this position immediately, no point continuing
            }
        }

        if (matched) return i; // full match confirmed, return immediately
    }

    return -1;
};


console.log(strStr(haystack,needle))