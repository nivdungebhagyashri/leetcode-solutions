class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        ind=0
        while ind<len(nums)-1:
            if(nums[ind]==nums[ind+1]):
                del nums[ind]
                ind= ind-1
            ind=ind+1
        return(len(nums))
            