class Solution:
    def romanToInt(self, s: str) -> int:
        total=0
        symbols= {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
        for l in range(len(s)):
            
            if(s[l]=="I"):
                if total<symbols[s[l]]:
                    print("if")
                    total=symbols[s[l]]-total
                else:
                   
                    total=total+symbols[s[l]]
            else:
                
                if l>0 and symbols[s[l-1]]<symbols[s[l]]:
                    total=(total-symbols[s[l-1]])+(symbols[s[l]]-symbols[s[l-1]])
                   
                   
                else:
                    total=total+symbols[s[l]]
                    print(total)
                    
                    
        return total