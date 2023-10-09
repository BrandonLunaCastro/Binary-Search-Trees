import Node from "./node.js"
const buildTree = (arr,left = null,right = null) => {
  if (right > left || !arr || arr.length === 0) return null
  let arrSorted = arr.sort((a, b) => a - b)
  arrSorted = arrSorted.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item)
    }
    return acc
  }, [])
  const start = 0
  const end = arrSorted.length - 1 
  const middle = Math.round((start + end) / 2)
  const node = new Node(arrSorted[middle])
  node.leftChild = buildTree(arrSorted,start)
  node.rightChild = 
}
buildTree([1, 5, 65, 5, 6, 8, 8, 8])
/* class Tree {
  constructor (arr, root) {
    this.arr = arr
    this.root = root
  }
} */
