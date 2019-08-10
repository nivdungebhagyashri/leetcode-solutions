var reverse = function(x) {
    
    
    let ans=0;
    if(x<0){
        x=Math.abs(x)
        x = x.toString().split("").reverse().join("");
        ans='-'+x;
       
    }
    else if(x%10===0){
        x=Math.floor(x/10);
         ans = x.toString().split("").reverse().join("");
       
    }
    else{
         ans = x.toString().split("").reverse().join("");
        
    }
    console.log(ans);
    if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
    return ans;
    
};