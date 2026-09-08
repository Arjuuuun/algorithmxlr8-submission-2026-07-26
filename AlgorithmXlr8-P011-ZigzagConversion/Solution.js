const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const s = data[0];
const numRows = parseInt(data[1]);

// Write your solution here.
// Print s written in a zigzag pattern across numRows rows, then read
// back row by row.


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr= [];
    let direction =1;
    let row = 0;

     if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    for(let i=0;i<numRows;i++){
        arr.push([]);
    }
    for(let i=0; i<s.length ; i++){
        arr[row].push(s[i]);

        if(row === numRows-1){
            direction = -1
        }
        if(row === 0){
            direction = 1
        };

        row = row + direction;

    }

    let result = ""
     for (let i = 0; i < numRows; i++) {
        result += arr[i].join("");
    }

    return result;
    
};


console.log(convert(s,numRows))