import Person from './person.js';
class Student extends Person {
  constructor(id, name, age, klassObj) {
    super(id, name, age);
    this.klass = klassObj;
  }
  introduce() {
    return `${super.introduce()} I am a Student. ${this.klass.leader ? `I am Leader of Class ${this.klass.number}.` : `I am at Class ${this.klass.number}.`}`;
  }
}
module.exports = Student;