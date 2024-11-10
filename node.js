import { JsonTypes } from "./jsonTypes.js";

class Node {
  #children;
  #visited;
  #parent;

  constructor(value, parent = null) {
    this.value = value;
    this.type = JsonTypes.structure;
    this.parent = parent;
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

  visit() {
    this.#visited = true;
  }

  isVisited() {
    return this.#visited;
  }

  getParent() {
    return this.#parent;
  }
}
