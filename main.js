import Tree from "./tree.js";
import * as fs from "fs";

let testData = fs.readFileSync("./test/data.json", "utf8");
let data = JSON.parse(testData);

let tree = new Tree("[]");
let node1 = tree.addNode(tree.root, "{}");
let node1_key1 = tree.addNode(node1, "key1");
let node1_value1 = tree.addNode(node1_key1, "value1");
//let node2 = tree.addNode(tree.root, "{}");
//let node2_key2 = tree.addNode(node2, "key2");
//let node2_value2 = tree.addNode(node2_key2, "value2");

let nodeList = tree.look([tree.root], 0);
//nodeList.forEach((node) => console.log(node.value));
console.log(nodeList.map((node) => node.value));

// start at the bottom of the tree, left side - depth first
function doStuff() {
  // terminating statement
  // check if at top of tree
  // if so, return
  // else
  // check if left child exists
}
