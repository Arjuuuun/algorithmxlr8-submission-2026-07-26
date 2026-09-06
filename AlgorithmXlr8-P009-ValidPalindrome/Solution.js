const s = require('fs').readFileSync(0, 'utf-8').replace(/\n$/, '');

// Write your solution here.
// Print "true" if s is a palindrome after lowercasing and removing all
// non-alphanumeric characters, otherwise print "false".
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let string = s.toLowerCase().trim();
    let regex = /[a-z0-9]/
    let i = 0;
    let j = string.length - 1;

    while(i < j){
        while(!regex.test(string[i])){
             i++
        }
        while(!regex.test(string[j])){
             j--
        }
        if(string[i] === string[j]){
            i++;
            j--
        }else{
            return false;
        }
    }

    return true
    
};


console.log(isPalindrome(s))