export default class JsonType {
  constructor(value, type) {
    if (type != "structure" && type != "key" && type != "value") {
      throw new Error("Invalid type");
    }
    this.value = value;
    this.type = type;
  }
}

JsonType.prototype.toString = function () {
  return `${this.type}: ${this.value}`;
};
