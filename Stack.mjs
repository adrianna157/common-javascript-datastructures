import { LinkedList } from './LinkedList.mjs';

export class Stack extends LinkedList {
    push(val) {
        // prepend to the head
        this.add(val);
    }
    /*
        temp var to point to the current node and then move head
        
        current node
        [33|Next Pointer] -> [44|Next Pointer] -> [55|Next Pointer] -> [Value|Null]

        temp var = [33|Next Pointer]
        this.head = [44|Next Pointer] 
        link list now looks like this: [44|Next Pointer] -> [55|Next Pointer] -> [Value|Null]

        return [33|Next Pointer] // value that is popped


            
    */
    pop(){
        if(!this.head) console.error('Empty stack error');
        let goner = this.head;
        this.head = this.head.next;
        return goner.val;
    }
    
    //see what the current stack looks like
    peek() {
        // return what is at the top of the stack
        return this.head.value
    }
}


let stack = new Stack();
console.log(stack)