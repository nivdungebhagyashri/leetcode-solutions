class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digit_string_map= {"1":"","2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz"}
        arr=[]
        
        if (len(digits)==0):
            return []
        if (len(digits)==1):
            return list(digit_string_map[digits])
        
        
        
        comb=[""]
        for digit in digits:
            new_comb=[]
            for ch in digit_string_map[digit]:
                new_comb.extend(el+ch for el in comb)
            comb= new_comb
        return comb
    
    