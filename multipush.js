"use strict";
export function multiPush(array, itemToPush, ...indices) {
  let currentArray = array;
  if (indices.length > 1) {
    currentArray = currentArray[indices[0]];
    multiPush(currentArray, itemToPush, ...indices.slice(1));
  } else {
    if (!Array.isArray(currentArray)) {
      currentArray = [currentArray[indices[0]], itemToPush];
    } else {
      currentArray[indices[0]] = itemToPush;
    }
  }

  return currentArray;
}

// test harness for multipush function
function main() {
  let tree = [[], [[{}, "key1"], {}]];
  multiPush(tree, "value1", 1, 0, 1, 0);
  console.log(tree);
}
main();
