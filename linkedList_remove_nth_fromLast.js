var removeNthFromEnd = function(head, n) {
    let dict = {}
    let start = head
    let i =0
    while (start!=null){
        i++
        dict[i]= start
        start = start.next
    }
    let lastN = i
    let NtoDelete = lastN-n+1
    
    if(dict[NtoDelete-1]===undefined){
        return dict[NtoDelete].next
    }
    dict[NtoDelete-1].next = dict[NtoDelete].next
    
    return head
}

/* 3 pointers */
var removeNthFromEnd = function(head, n) {
    let p1 = head;
    let p2 = head;
    let p3 = head;
    let counter = 0;
    if(head.next===null){return null;}
    while(p1!==null){
        p1= p1.next;
        if(counter>=n){
            p2=p2.next;
            
        }
        if(counter>=n+1){
            p3=p3.next;
        }
        counter++;
    }
   console.log(p2.val);
   console.log(p3.val);   
   if(p2===p3){
       console.log("here");
       head=head.next;
       return head;
   }
   p3.next = p2.next; 
   return head;
}