export { };
class Students {
    fullName: string;
    constructor(private person: Person) {
        this.fullName = person.firstName + " " + person.middleInitial + " " + person.lastName;

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
let thanhStudents = new Students(user);
document.body.textContent = thanhStudents.greeter();