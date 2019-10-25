var maxSubArray = function(nums) {
    let index =0;
    let sum =nums[0];
    let max=sum;
    for (let i=1; i<=nums.length-1; i++){
        let newSum = sum + nums[i];
        sum = newSum>nums[i] ? newSum: nums[i];
        max = sum>max ? sum : max;
     }
    return max;
    
};