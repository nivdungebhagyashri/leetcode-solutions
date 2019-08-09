/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    alen= a.length;
    blen = b.length;
    maxlen= Math.max(alen,blen);
    carry=0;
    output="";
    if(alen>blen){
        diff=alen-blen
        for (let i=1;i<=diff;i++){
            b="0"+b;
        }
    }
    else{
        diff=blen-alen
        for (let i=1;i<=diff;i++){
            a="0"+a;
        }
        
    }
    
    
    for(let i=maxlen-1;i>=0;i--){
       console.log(Number(b[i]));
       sum= Number(a[i])+Number(b[i])+carry;
        
       if(sum==2){
           
           output="0"+output
           carry=1;
           sum=0;
       }
        else if(sum>2){
           
           output="1"+output
           carry=1;
           sum=0;
        }
        else if(sum==1){
            
            output="1"+output
            carry=0;
            sum=0;
            
        }
        else{
            
            output="0"+output
            carry=0;
            sum=0;
        }
        
        
    }
  if(carry>0) return carry+output;
  else return output;
  
};