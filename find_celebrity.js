/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    return function(n) {
        let celebrity=0;
        for(let i=1; i<n; i++){
            if(knows(celebrity, i)){
                celebrity=i;
            }
        }
        for(let j=0; j<n; j++){
            if(celebrity != j && (knows(celebrity, j) || !knows(j, celebrity))){
                return -1
            }
        }
        return celebrity;
    };
};