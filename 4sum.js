/*Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]*/

var fourSum = function(nums, target) {
    values=[];
    for(let i=0; i<=nums.length-3; i++){
        for(let j=i+1;j<=nums.length-2;j++){
            for(let k=j+1,l=nums.length-1;k<l;){
                sum= nums[i]+nums[j]+nums[k]+nums[l];
                if(sum===target){
                    values.push([nums[i],nums[j],nums[k],nums[l]]);
                }
            }
        }
    }
    return values;
};
