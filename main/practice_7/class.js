class Class {
  constructor(num) {
    this.number = num;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
}
module.exports = Class;