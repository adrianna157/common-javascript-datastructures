// Linked List

// Node - reusable abstracted data structure
export class Node {
  constructor(val, nxt) {
    this.value = val;
    this.next = nxt;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  /*
    Time Complexity: Constant time O(1)

    Step 1: create new node that's next is going to point back to the head
    Step 2: reassign the head to the new node with the new value
    
    head is null
    [Value|Null ]
    
    when adding a new node it prepends to the header 
    
    add(33)
    [33|Next Pointer] -> [Value|Null ]
    
    add(43)
    [33|Next Pointer] -> [43|Next Pointer] -> [Value|Null]
  */ 
  add (val){ 
    this.head = new Node(val, this.head);

  }

  /* 
    Time Complexity: Linear Time O(n)

    Step 1: Traversing through the linked list
    - current = head of list
    - while current (while current is not null) 
        - log cur.value
        - replace current with current.next (cure = cur.next)

    Step 2: Make sure it works
        Go through an example

  [33|Next Pointer] -> [44|Next Pointer] -> [55|Next Pointer] -> [Value|Null]
  
  traverse example output:
    55
    44
    33
*/
  traverse (processCallback) {
    let current = this.head;
    while (current) {
      processCallback(current.value);
      current = current.next;
    }
  }

}

// Interview Questions

/*
    summing up the values

    let sum = 0;
    Node.traverse(v => sum += v)
*/

/* 
    find max value of a node

    let max = -Infinity
    Node.traverse(v => max = v > max ? v : max); 

*/

/*
    Reverse - that is immutable
    Because we prepend our values when we create a new list and add it, it will be reversed

    let rList = new LinkedList();
    Node.traverse(v => rList.add(v));
    rList.Traverse(console.log)

*/

/*
    Find all the unique values (2 approaches)

    Built in Set approach - set of unique values

    let set = new Set();
    Node.traverse( v => set.add(v));
    console.log(set)

    Object Approach
    
    let set = new {};
    Node.traverse( v => set[v] = 1);
    console.log(Object.keys(set));

    count unique values

    Object Approach
    let items = new {};
    Node.traverse( v => items[v] ? items[v]++ : items[v] = 1);
    console.log(items);

*/
