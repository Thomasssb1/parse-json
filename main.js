import Tree from "./tree.js";
import * as fs from "fs";

let testData = fs.readFileSync("./test/data.json", "utf8");
let data = JSON.parse(testData);

let tree = new Tree("[]");
let node1 = tree.addNode(tree.root, "{}");
let node1_key1 = tree.addNode(node1, "key1");
let node1_value1 = tree.addNode(node1_key1, "value1");
let node2 = tree.addNode(tree.root, "{}");
let node2_key2 = tree.addNode(node2, "key2");
let node2_value2 = tree.addNode(node2_key2, "value2");

//let nodeList = tree.look(tree.root);
//console.log(nodeList);

let arr = [5, [3, [6, 7], [4, 5]]];

Array.prototype.multiPush = function multiPush() {
  let itemToPush = arguments[0];
  let indices = Array.from(arguments).slice(1);
  let currentArray = this;
  if (indices.length > 1) {
    currentArray = currentArray[indices[0]];
    currentArray.multiPush(itemToPush, ...indices.slice(1));
  } else {
    currentArray[indices[0]] = itemToPush;
  }
  return currentArray;
};

arr.multiPush(4, 1, 2, 1);
console.log(arr);
