var hasCycle = function(head) {
    if(head===null) return false;
    if(head.next===null) return false;
    
    let slow =head;
    let fast = head;
    
    while(slow.next && (fast.next&&fast.next.next)){
        
        if(slow.next===fast.next.next){
            return true;
        }
        slow=slow.next;
        fast=fast.next.next;
        
    }
    return false;
};