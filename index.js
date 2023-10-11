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
    /*     if (root.leftChild === null && root.rightChild === null) {
      root.data = null;
      root = null
      return root;
    }
 */
    if (root.leftChild === null) {
      const next = root.rightChild;
      root = null;
      return next;
    } else if (root.rightChild === null) {
      const next = root.leftChild;
      root = null;
      return next;
    } else {
      // pasamos a la funcion findMinimum el nodo hijo derecho
      const temp = this.#findMinimum(root.rightChild);
      root.data = temp.data;// al valor actual lo reemplazamos por el valor minimo encontrado
      root.rightChild = this.delete(root.data, root.rightChild); // ejecutamos de forma recursiva la funcion para eliminar el duplicado
      return root;
    }
  }

  #findMinimum (root) {
    // una vez dentro hacemos un while que se ejecuta hasta que no se encuentre hijo izquierdo
    while (root.leftChild !== null) {
      // le asignamos a root el valor del minimo hijo izquierdo encontrado
      root = root.leftChild;
    }
    return root;
  };
}
const newTree = new Tree([1, 90, 2, 4, 32, 6, 5]);
const root = newTree.root;
newTree.insert(3, root);
newTree.insert(95, root);
console.log(newTree.prettyPrint(root));
newTree.delete(32, root);
console.log(newTree.prettyPrint(root));
// console.log(newTree.delete(4, root));
// console.log(newTree.prettyPrint(root));
