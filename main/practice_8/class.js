class Class {
  constructor(num) {
    this.number = num;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
  assignLeader(student) {
    if (student.klass.number === this.number) {
      this.leader = student;
    }
  }
}
module.exports = Class;