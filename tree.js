export default class Tree {
  constructor(root) {
    this.root = new Node(root);
    this.size = 1;
  }

  addNode(parent, childValue) {
    this.size++;
    let newNode = new Node(childValue);
    parent.addChild(newNode);
    return newNode;
  }

  look(prevNodes, lastNodeIndex) {
    if (prevNodes.length == this.size || lastNodeIndex < 0) {
      return prevNodes;
    } else {
      console.log(
        prevNodes[lastNodeIndex].getChildren().map((node) => node.value)
      );
      if (prevNodes[lastNodeIndex].getChildren().length == 0) {
        return this.look(prevNodes, lastNodeIndex - 1);
      } else {
        let nodeChildren = prevNodes[lastNodeIndex].getChildren();
        return this.look(
          [...prevNodes, ...nodeChildren],
          lastNodeIndex + nodeChildren.length
        );
      }
    }
  }
}

Tree.prototype.toString = function TreeToString() {
  return `Tree size: ${this.size}`;
};

class Node {
  #children;
  #visited;

  constructor(value) {
    this.value = value;
    this.#children = [];
    this.#visited = false;
  }

  addChild(child) {
    this.#children.push(child);
  }

  removeChild(child) {
    let index = this.#children.indexOf(child);
    if (index > -1) {
      this.#children.splice(index, 1);
    } else {
      console.log("Child not found");
    }
  }

  setValue(value) {
    this.value = value;
  }

  getChildren() {
    return this.#children;
  }

  get [Symbol.toStringTag]() {
    return `Node value: ${this.value}`;
  }
}
