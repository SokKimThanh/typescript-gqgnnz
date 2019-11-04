export { }
interface Person {
  middleName?: string;
  fName: string;
  lName: string;
}
class Student {
  person: Person;
  constructor(person?: Person) {
    this.person = person || {
      middleName: "",
      fName: "",
      lName: "string"
    };
  }

  greeter(person: Person) {
    if (person.middleName) {
      return `${person.fName} ${person.middleName} ${person.lName}`;
    } else {
      return `${person.fName} ${person.lName}`;
    }
  }
  greeter_list(userList: Person[]) {
    for (let userIndex in userList) {
      let person = userList[userIndex];
      console.log(this.greeter(person));
    }
  }
}

let userList: Person[] = [
  { middleName: "", fName: "Jane", lName: "User" },
  { middleName: "Gen", fName: "An", lName: "User" },
  { middleName: "Gen", fName: "Ba", lName: "User" },
  { middleName: "Gen", fName: "Vi", lName: "User" },
  { middleName: "Gen", fName: "Kara", lName: "User" }
];
let studentA = new Student();
studentA.greeter_list(userList);