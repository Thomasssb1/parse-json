"use strict";
import { multiPush } from "./multipush.js";
import { Node } from "./node.js";

export default class Tree {
  constructor(root) {
    this.root = new Node(root);
    this.size = 1;
  }

  addNode(parent, childValue) {
    this.size++;
    let newNode = new Node(childValue, parent);
    parent.addChild(newNode);
    return newNode;
  }

  look(currentNode, nodeList = []) {
    currentNode.visit();
    let indices = [];
    let parent = currentNode.getParent();
    while (parent != null) {
      indices.push(1);
      parent = parent.getParent();
    }
    console.log(indices);

    let children = currentNode.getChildren();
    for (let i = 0; i < children.length; i++) {
      if (!children[i].isVisited()) {
        console.log("pushing:");
        console.log(
          `nl: ${nodeList} // child: ${children[
            i
          ].toString()} // indices: ${indices}`
        );
        multiPush(nodeList, children[i].toString(), ...indices);
        this.look(children[i], nodeList);
      }
    }
    return nodeList;
  }
}

Tree.prototype.toString = function TreeToString() {
  return `Tree size: ${this.size}`;
};
