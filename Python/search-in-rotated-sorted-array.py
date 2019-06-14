#https://leetcode.com/problems/search-in-rotated-sorted-array/

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        #Search list from beginning and end
        
        target_index = -1
        
        
        first_half_of_list = math.floor(len(nums)/2)
        
        second_half_of_list = len(nums) - first_half_of_list

        
        for i in range (0, int(first_half_of_list)):
            if(nums[i] == target):
                target_index = i
            print(nums[i])
            
        for j in range (first_half_of_list, len(nums)):
            if(nums[j] == target):
                target_index = j
        
        return target_index