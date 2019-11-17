var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast.next!==null && fast.next.next!==null ){
       fast=fast.next.next;
       slow=slow.next;
    }
    if(fast.next != null){
        slow = slow.next;
    }
    return slow;
};