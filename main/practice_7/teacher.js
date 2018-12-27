import Person from "./person.js";
class Teacher extends Person {
  constructor(name, age, klassObj) {
    super(name, age);
    this.klass = klassObj;
  }
  basic_introduce() {
    return `${super.introduce()} I am a Teacher.`;
  }
  introduce() {
    return `${this.basic_introduce()} I teach ${this.klass ? `Class ${this.klass.number}.` : 'No Class.'}`;
  }
  introduceWith(stu) {
    return `${this.basic_introduce()} I${stu.klass.number === this.klass.number ? "" : " don't"} teach ${stu.name}.`;
  }
}
module.exports = Teacher;