import JsonType from "./jsonTypes.js";

export default class Parser {
  constructor(dataString) {
    JSON.parse(dataString); // check if the data is valid
    this.data = dataString.replace(/(\r\n|\n|\r)/gm, "");
    this.labelledList = [];
    this.structures = ["{", "}", "[", "]", '"', ",", ":"];
  }

  parse() {
    let stringList = [];
    let lastStructureIndex = -1;
    console.log(this.labelledList);
    console.log(this.data[0]);
    for (let i = 0; i < this.data.length; i++) {
      let current = this.data[i];
      if (this.structures.includes(current)) {
        if (current == '"') {
          if (current == this.data[lastStructureIndex]) {
            let stringData = stringList.join("");
            this.labelledList.push(new JsonType(stringData, "value"));
          }
          stringList = [];
        } else if (current == ":") {
          let stringData = this.labelledList[this.labelledList.length - 2];
          stringData.type = "key";
        } else if (current == "," || current == "}") {
          let stringData = stringList.join("").substring(1, stringList.length);
          this.labelledList.push(new JsonType(stringData, "value"));
          stringList = [];
        }
        this.labelledList.push(new JsonType(current, "structure"));
        lastStructureIndex = i;
      } else if (
        this.data[lastStructureIndex] == ":" ||
        this.data[lastStructureIndex] == '"'
      ) {
        stringList.push(current);
      }
    }
    return this.labelledList;
  }
}
