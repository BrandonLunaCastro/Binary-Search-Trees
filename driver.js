import { Tree } from "./Tree.js";

const randomLength = () => {
  return Math.round(Math.random() * (9 - 0 + 1) + 0);
};
const randomNumber = () => {
  return Math.round(Math.random() * (100 - 0) + 0);
};

const array = [];
const maxLength = randomLength();
for (let i = 0; i < maxLength; i++) {
  array.push(randomNumber());
};

console.log(array);
const newTree = new Tree(array);
newTree.prettyPrint();
console.log(newTree.isBalanced());
console.log(newTree.preOrder());
console.log(newTree.inOrder());
console.log(newTree.postOrder());
console.log(newTree.levelOrder());
newTree.insert(101);
newTree.insert(102);
newTree.insert(103);
newTree.prettyPrint();
console.log(newTree.isBalanced());
newTree.root = newTree.rebalance();
newTree.prettyPrint();
console.log(newTree.isBalanced());
