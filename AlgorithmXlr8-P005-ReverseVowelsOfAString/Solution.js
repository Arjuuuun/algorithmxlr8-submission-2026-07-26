const s = require('fs').readFileSync(0, 'utf-8').replace(/\n$/, '');

// Write your solution here.
// Print s with only its vowels reversed in place.
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('');
    let left=0;
    let right = arr.length-1

    while(left <= right){
        if(vowels.has(arr[left]) && vowels.has(arr[right])){
            [arr[left],arr[right]] = [arr[right],arr[left]]
            left++;
            right--
        };

        if(!vowels.has(arr[left])){
            left++
        }

        if(!vowels.has(arr[right])){
            right--
        }

    };

    arr = arr.join('');
    return arr;
    
};

console.log(reverseVowels(s))