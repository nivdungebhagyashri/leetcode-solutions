var maxArea = function(height) {
    let volArray=[];
    let minH=0;
    for(let i=0; i<=height.length-1;i++){
        for(let j=0; j<height.length-1;j++){
             let min=Math.min(height[i],height[j])
             let diff = Math.abs(i-j);
             if(min*diff>minH){
                 minH=min*diff
             }
            }
    }
    return(minH)
};