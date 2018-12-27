import Person from './person.js';
class Student extends Person {
  constructor(name, age, klassObj) {
    super(name, age);
    this.klass = klassObj;
  }
  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
  }
}
module.exports = Student;