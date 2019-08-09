class Solution:
    def isValid(self, s: str) -> bool:
        b_dict={'(':')','{':'}','[':']'}
        open=['(','{','[']
        counter=[]
        for b in s:
            if b in open:
                counter.append(b)
            else:
                if(len(counter)!=0):
                    if counter[len(counter)-1] in open:
                        if (b == b_dict[counter[len(counter)-1]]):
                            counter.pop()
                        else:
                             counter.append(b)
                else:
                    counter.append(b)
                                  
        if (len(counter)==0):
                return True
        else:
                return False   
        
                 
                