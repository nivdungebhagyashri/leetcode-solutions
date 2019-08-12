var numJewelsInStones = function(J, S) {
    let count=0;
    for(let schar of S){
        if(J.includes(schar)){
            count+=1;
        }
    }
    return count;
};