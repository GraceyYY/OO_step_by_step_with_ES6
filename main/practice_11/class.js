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
      if (this.assignLeaderListener) {
        console.log(`I am ${this.assignLeaderListener.name}. I know ${student.name} become Leader of Class ${this.number}.`);
      }
    } else {
      console.log('It is not one of us.');
    }
  }
  appendMember(student) {
    student.klass = this;
    if (this.joinListener) {
      console.log(`I am ${this.joinListener.name}. I know ${student.name} has joined Class ${this.number}.`);
    }
  }
  isIn(student) {
    return student.klass.number === this.number;
  }
  registerAssignLeaderListener(teacher) {
    if (teacher.klasses.map(klass => klass.number).includes(this.number)) {
      this.assignLeaderListener = teacher;
    }
  }
  registerJoinListener(teacher) {
    if (teacher.klasses.map(klass => klass.number).includes(this.number)) {
      this.joinListener = teacher;
    }
  }
}
module.exports = Class;