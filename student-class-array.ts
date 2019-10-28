export { };
class Students {
  fullName: string;
  constructor(private person: Person, private list_person: Person[]) {
    this.fullName = person.firstName + " " + person.middleInitial + " " + person.lastName;
  }
  greeter_list_user() {
    this.list_person.forEach(function (person, index, list) {
      if (person.middleInitial) {
        console.log(`${person.firstName} ${person.middleInitial} ${person.lastName}`);
      } else {
        console.log(`${person.firstName} ${person.lastName}`);
      }

    });
  }
  greeter() {
    if (this.person.middleInitial) {
      return "Hello, " + this.fullName;
    } else {
      return "Hello, " + this.person.firstName + " " + this.person.lastName;
    }
  }
}
interface Person {
  firstName: string,
  lastName: string,
  middleInitial?: string,
}

let user = { firstName: "Thanh", lastName: "Sok" };
let list_user = [{ firstName: "Thanh", middleInitial: "Kim", lastName: "Sok" }, { firstName: "Y", lastName: "Sok" }, { firstName: "An", lastName: "Sok" }];

let thanhStudents = new Students(user, list_user);
thanhStudents.greeter_list_user();
//document.body.textContent = thanhStudents.greeter();