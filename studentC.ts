export {};
interface Person {
  firstName: string;
  middleInitial: string;
  lastName: string;
  fullName: string;
  age?: number;
}
class StudentC {
  constructor(public person: Person) {}
  greeter() {
    if (this.person.age) {
      return `Hello, ${this.person.fullName}, I'm ${this.person.age} years old`;
    } else {
      return `Hello, ${this.person.lastName} ${this.person.firstName}`;
    }
  }
}

class hocSinhGioi extends StudentC {
  constructor(public person: Person) {
    super(person);
  }
  howAreYou() {
    return `Hi ${this.person.fullName}, how are you?`;
  }
}
let person = {
  firstName: "Thanh",
  middleInitial: "Kim",
  lastName: "Sok",
  fullName: "Sok Kim Thanh",
  age: 28
};
let user2 = new hocSinhGioi(person);
document.body.textContent = user2.greeter();
// document.body.textContent = user2.howAreYou();
