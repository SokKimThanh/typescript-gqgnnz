interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}
export class StudentClass {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
    greeter(person: Person) {
        return `Hello, ${person.fullName}`;
    }
}
let user = new StudentClass("Sok", "Kim", "Thanh");
document.body.textContent = user.greeter(user);

export class hocSinhGioi extends StudentClass {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        super(firstName, middleInitial, lastName);
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
    fuck() {
        return "Fuck your mother"
    }
}
let user2 = new hocSinhGioi("Sok2", "Kim2", "Thanh2");
document.body.textContent = user2.greeter(user2);
document.body.textContent = user2.fuck();