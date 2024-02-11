"use strict";
import Tree from "./tree.js";
import * as fs from "fs";

let testData = fs.readFileSync("./test/data.json", "utf8");
let data = JSON.parse(testData);

let tree = new Tree("[]");
let node1 = tree.addNode(tree.root, "temp1");
let node2 = tree.addNode(tree.root, "temp2");
//let node1_key1 = tree.addNode(node1, "key1");
//let node1_value1 = tree.addNode(node1_key1, "value1");
//let node2 = tree.addNode(tree.root, "node2");
//let node2_key2 = tree.addNode(node2, "key2");
//let node2_value2 = tree.addNode(node2_key2, "value2");

let nodeList = tree.look(tree.root);
console.log("-----------");
console.log(nodeList);
console.log(nodeList.length);
