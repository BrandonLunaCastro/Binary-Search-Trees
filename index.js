import Node from "./node.js";

class Tree {
  constructor (arr) {
    this.arr = this.sortArray(arr);
    this.root = this.buildTree(this.arr, 0, this.arr.length - 1);
  }

  sortArray = (arr) => {
    let arrSorted = arr.sort((a, b) => a - b);
    arrSorted = arrSorted.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);
    return arrSorted;
  };

  buildTree = (arr, start, end) => {
    if (start > end) return null;
    const middle = Math.round((start + end) / 2);
    const node = new Node(arr[middle]);
    node.leftChild = this.buildTree(arr, start, middle - 1);
    node.rightChild = this.buildTree(arr, middle + 1, end);
    return node;
  };

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.rightChild !== null) {
      this.prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.leftChild !== null) {
      this.prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  insert (value, root) {
    if (root === null) {
      const node = new Node(value);
      return node;
    }

    if (value < root.data) {
      root.leftChild = this.insert(value, root.leftChild);
    } else if (value > root.data) {
      root.rightChild = this.insert(value, root.rightChild);
    }
    return root;
  }

  delete (value, root) {
    if (root === null) {
      return null;
    }
    if (value < root.data) {
      root.leftChild = this.delete(value, root.leftChild);
      return root;
    } else if (value > root.data) {
      root.rightChild = this.delete(value, root.rightChild);
      return root;
    }

    if (root.leftChild === null) {
      const next = root.rightChild;
      root = null;
      return next;
    } else if (root.rightChild === null) {
      const next = root.leftChild;
      root = null;
      return next;
    } else {

    }
  }
}
const newTree = new Tree([1, 100, 2, 4, 32, 5]);
const root = newTree.root;
newTree.insert(3, root);
console.log(newTree.prettyPrint(root));
newTree.delete(3, root);
newTree.delete(100, root);
console.log(root);
console.log(newTree.prettyPrint(root));
