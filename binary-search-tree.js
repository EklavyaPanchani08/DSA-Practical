class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  createTree(val) {
    const newNode = new Node(val)
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(root, val) {
    if (val.value < root.value) {
      if (root.left) {
        this.insertNode(root.left, val)
      } else {
        root.left = val;
      }
    } else {
      if (root.right) {
        this.insertNode(root.right, val)
      } else {
        root.right = val;
      }
    }
  }
  search(root, val) {
    if (!root) {
      return false
    }
    if (root?.value === val) {
      return true;
    } else if (val < root.value) {
      return this.search(root.left, val)
    } else if (val > root.value) {
      return this.search(root.right, val)
    } else {
      return false
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }
  inOrder(root) {
    if (root) {
      this.preOrder(root.left)
      console.log(root.value);
      this.preOrder(root.right)
    }
  }
  postOrder(root) {
    if (root) {
      this.preOrder(root.left)
      this.preOrder(root.right)
      console.log(root.value);
    }
  }
  bfsTraversing() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.log("bfsTraversing",current.value);
    }
  }
  findMax(root){
    if(!root.right){
      return root.value
    }else{
      return this.findMax(root.right)
    }
  }
  findMin(root){
    if(!root.left){
      return root.value
    }else{
      return this.findMin(root.left)
    }
  }
  
  showTree() {
    console.log(this.root)
  }
}

const bst = new BST()
bst.createTree(10)
bst.createTree(15)
bst.createTree(20)
bst.createTree(25)
bst.createTree(5)
bst.createTree(3)
bst.createTree(7)
bst.preOrder(bst.root)
bst.bfsTraversing()
console.log(bst.root);
console.log(bst.findMax(bst.root));
console.log(bst.findMin(bst.root));