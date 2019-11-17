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


 /* with using stack extra space */

 var isPalindrome = function(head) {
    if(head === null) return true;
    if(head.next === null) return true;
    
    let slow=head;
    let fast = head;
    
    let arr1 = [];
    
    while(fast!==null && fast.next !=null ){
        arr1.push(slow.val);
        slow=slow.next;
        fast=fast.next.next;
    }

    if(fast!=null){
        slow=slow.next;
    }    

    while(slow!=null){
        let current = arr1.pop();
        if(current !== slow.val){
            return false;
        }
        slow=slow.next;
    }
    return true;
}