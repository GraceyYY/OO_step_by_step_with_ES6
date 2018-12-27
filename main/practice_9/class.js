class Class {
  constructor(num) {
    this.number = num;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
  assignLeader(student) {
    if (student.klass === this) {
      this.leader = student;
    } else {
      console.log('It is not one of us.');
    }
  }
  appendMember(student) {
    student.klass = this;
  }
}
module.exports = Class;