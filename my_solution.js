class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function searchBT(root, target) { 
    if(!root) return false
    
    let queue = [root]
    while(queue.length){
        const curr = queue.shift()
        if(curr.value === target) return true
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)        
    }
    return false
}

/*
        3
    29      4
  2       2.   9

> 3 29 4 2 2 9
*/

// Test Cases
var tree1 = new TreeNode(3, 
                         new TreeNode(29, 
                                      new TreeNode(2)), 
                         new TreeNode(4, null, 
                                      new TreeNode(2, 
                                                   new TreeNode(9))))
console.log(searchBT(null, 1)) // false
console.log(searchBT(tree1, 9)) // true
console.log(searchBT(tree1, 1)) // false
console.log(searchBT(tree1, 2)) // true
console.log(searchBT(new TreeNode(1), 2)) // false
