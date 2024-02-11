"use strict";
export function multiPush(array, itemToPush, ...indices) {
  let currentArray = array;
  if (indices.length > 1) {
    currentArray = currentArray[indices[0]];
    multiPush(currentArray, itemToPush, ...indices.slice(1));
  } else {
    console.log(indices);
    console.log(!Array.isArray(currentArray));
    if (!Array.isArray(currentArray)) {
      currentArray = [currentArray[indices[0]], itemToPush];
    } else {
      currentArray[indices[0]] = itemToPush;
    }
  }

  return currentArray;
}

function main() {
  let arr = [5, [3, [6, 7], [4, 5]]];

  multiPush(arr, 4, 1, 2, 1);
  console.log(arr);

  let tree = [[], [[{}, "key1"], {}]];
  multiPush(tree, "value1", 1, 0, 1, 0);
  console.log(tree);
}
