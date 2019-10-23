interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}

class StudentClass {
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

class StudentA extends StudentClass {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        super(firstName, middleInitial, lastName);
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
    howAreYou() {
        return `Hi ${this.fullName}, how are you?`
    }
}
let user2 = new StudentA("Sok", "Kim", "Thanh");
document.body.textContent = user2.greeter(user2);
document.body.textContent = user2.howAreYou();