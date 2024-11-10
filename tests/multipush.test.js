const multiPush = require("../multipush.js");

describe("multipush testing", () => {
  test("Replace deep value in array", () => {
    let arr = [5, [3, [6, 7], [4, 5]]];

    expect(multiPush(arr, 4, 1, 2, 1)).toEqual([5, [3, [6, 4], [4, 4]]]);
  });
});
