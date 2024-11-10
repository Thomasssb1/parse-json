"use strict";
import Parser from "./parser.js";
import * as fs from "fs";

let testData = fs.readFileSync("./tests/data.json", "utf8");
try {
  let parser = new Parser(testData);
  let result = parser.parse();
  console.log(result);
} catch (e) {
  // if the json is malformed
  throw new Error(e);
}
