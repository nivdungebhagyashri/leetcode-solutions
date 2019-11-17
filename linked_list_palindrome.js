var isPalindrome = function(head) {
    
    if(head === null) return true;
    if(head.next === null) return true;
    
    let reversed = reverseAndClone(head);
    return isEqual(reversed,head);
};


var reverseAndClone = function(node){
    let head1 = new ListNode(null);
    while(node !== null){
        
        let n = new ListNode(node.val);
        n.next = head1;
        head1 = n;
        node = node.next;
        
    }
    
    return head1;
}


var isEqual = function(list1,list2){
    while(list1!==null && list2!==null){
        if(list1.val!==list2.val){
            return false;
        }
        list1=list1.next;
        list2=list2.next;
    }
    return true;
}