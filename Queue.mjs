// Composition

import { LinkedList, Node } from "./LinkedList.mjs";

class Queue {
  constructor() {
    this.list = new LinkedList();
    this.front = null;
    this.back = null;
  }

  /*
         O(1) operation
         When the queue is empty, the front and the back are pointers are pointing to the same node

         first one is in the front and the last one is in the back
    
    */
  enqueue(val) {
    //if we don't have a front or back then we create that first node
    if (!this.front) {
      this.list.add(val);
      this.front = this.back = this.list.head;
    } else {
      // Create new node
      let newNode = new Node(val, null);
      //take back of list and connect to new node
      this.back.next = newNode;
      //update what the back of the list is
      this.back = new node();
    }
  }

  dequeue() {
    // take this off the front and create temp to hold it
    let goner = this.front.value

    // update the front pointer to be the new node
    this.front = this.front.next

    // update the new head to solve the memory leak
    this.list.head = this.front

    return goner
  }

  peek(val) {
    return this.front.value
  }
}

const q = new Queue();
q.enqueue("2");
q.dequeue();
console.log(q);
