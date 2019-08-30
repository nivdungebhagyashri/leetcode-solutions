//Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. 
//You may assume that each input would have exactly one solution.


/*Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).*/

var threeSumClosest = function(nums, target) {
    // let sum=0;
    nums = nums.sort((a,b) => a - b);
    for (let i=0;i<=nums.length-2;i++){
        
        for(let j = i + 1, k = nums.length - 1; j < k;){
          let sum= nums[i]+nums[j]+sums[k]
          let dif=target-sum;
        }
        if(diff===0)return sum;
        else{
            
        }
    }
    
    
};