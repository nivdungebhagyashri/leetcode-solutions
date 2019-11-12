/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length===1) return nums[0];
    var min = nums[0];
    for(i=0; i<nums.length; i++){
        if(nums[i]>nums[i+1]){
           return nums[i+1];
        }
     }
    return min;
};