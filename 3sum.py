class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        triplet_arr=[]
        nums.sort()
        
        for i in range(len(nums)-2):
            if nums[i]>0:break
            if i>0 and nums[i]==nums[i-1]: continue
            l,r = i+1, (len(nums)-1)
            
            while l<r:
                total=nums[i]+nums[l]+nums[r]
                
                if total<0:
                    l=l+1
                   
                elif total>0:
                    r=r-1
                    
                else:
                    triplet_arr.append([nums[i],nums[l],nums[r]])
                    while l<r and nums[l]==nums[l+1]:
                        l=l+1
                    while l<r and nums[r]==nums[r-1]:
                        r=r-1
                    l=l+1
                    
                    r=r-1
        return triplet_arr
                