var isArmstrong = function(N) {
    let sum=0;
    let Narray=Array.from(N+'');
    console.log(Narray);
    Narray.map(x => sum+=Math.pow(x,Narray.length));
    return(sum===N);
    

};