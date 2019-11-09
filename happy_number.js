/**
 * @param {number} n
 * @return {boolean}
 */


/*Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1*/

const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

var isHappy = function(n) {
    if(n<1) return false;
    let set = new Set() ;
    
    while(!set.has(n)){
        set.add(n);
        nstring = n.toString()
        n=0;
        for(i=0; i<nstring.length;i++){
            n =  n+squares[nstring[i]];
        }
        if(n==1){
            return true;
        }
    }
    return false;
};