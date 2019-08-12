var anagramMappings = function(A, B) {
    //without 2 for loops
    return A.map(numA => B.findIndex((numB)=> numA==numB));
};

or 

var anagramMappings = function(A, B) {
    p=[];
    for(let n of A){
        for(let i=0; i<=B.length; i++){
            if(n===B[i]){
                p.push(i);
                break;
            }
        }
    }
    return p;
}