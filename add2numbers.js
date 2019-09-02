/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. 
*/

var addTwoNumbers = function(l1, l2) {
    if(l1===null) return l2;
    if(l2===null) return l1;
    
    let carry=0;
    let l3 = new ListNode(null);
    const initialNode = l3;
    
    while(true){
        
        l3.val=getVal(l1)+getVal(l2)+carry;
        console.log(l3.val)
        carry=0;
        if(l3.val>=10){
            l3.val -= 10;
            carry = 1;
        }
        l1=getNext(l1);
        l2=getNext(l2);
      
        if(!l1 && !l2){
            console.log("here");
            l3.next=carry? new ListNode(1):null;
             break;
         }
    l3=l3.next=new ListNode();
 }
    return initialNode;
    
};


var getVal = node =>{
    return node?node.val:0;
}

var getNext = node =>{
    return node?node.next:null;
}
