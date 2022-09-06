class BinaryTree{
    constructor(val){
        this.value = val;
        this.left = null; // data type is a binary tree
        this.right = null; // data type is a binary tree
    }
    // Depth first traversal use a stack (pre-order, in-order, post-order)
    // Where you process your data determines if it is pre-order, in-order or post-order
    
    traverse (process){
        // pre - order : if you need to look at the parent first
        process(this.value);
        // recursion is using JS call stack
        if(this.left) this.left.traverse(process);
        // in - order traverse left node then traverse right node process(this.value);
        if(this.right) this.right.traverse(process);
        // post- order after traversing the left and right sides of a tree process(this.value);
    }

    // Breadth-first traversal use a queue
}

/*
    BinaryTree {
    value: 77,
    left: BinaryTree {
        value: 44,
        left: BinaryTree { value: 22, left: null, right: null },
        right: BinaryTree { value: 55, left: null, right: null }
    },
  right: BinaryTree { value: 99, left: null, right: null }
}
*/
const binaryTree = new BinaryTree(77);
binaryTree.left = new BinaryTree(44);
binaryTree.right = new BinaryTree(99);
binaryTree.left.left = new BinaryTree(22);
binaryTree.left.right = new BinaryTree(55);
binaryTree.traverse(console.log)

console.log(binaryTree);