var deleteDuplicates = function(head) {
    if(head === null){
        return null;
    }
    let p2 = head.next;
    let p1 = head;
    
    while(p2!==null){
       
        if(p1.val!==p2.val){
            p1.next=p2;
            p1=p1.next;
            p2=p2.next;
        }
        else{
            p2=p2.next;
        }
       
    }
    p1.next = null;
    return head;
};