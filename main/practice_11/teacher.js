import Person from "./person.js";
class Teacher extends Person {
  constructor(id, name, age, klassArr) {
    super(id, name, age);
    this.klasses = klassArr;
  }
  basic_introduce() {
    return `${super.introduce()} I am a Teacher.`;
  }
  introduce() {
    return `${this.basic_introduce()} I teach ${this.klasses ? `Class ${this.klasses.map(klass => klass.number).join(', ')}.` : 'No Class.'}`;
  }
  introduceWith(stu) {
    return `${this.basic_introduce()} I${stu.klass.number === this.klass.number ? "" : " don't"} teach ${stu.name}.`;
  }
  isTeaching(stu) {
    return Boolean(this.klasses.filter(klass => klass.isIn(stu)));
  }
}
module.exports = Teacher;