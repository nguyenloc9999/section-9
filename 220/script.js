class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet(){
        console.log(`Hey ${this.firstName}`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    // set a property that already exists
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName(){
        return this.__fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there');
    }
}
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always need to happen first!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }
    calcAge(){
        console.log(
            `I'm ${
                2037 - this.birthYear
            } years old, but as a student I feel more like ${
                2037 - this.birthYear + 10
            }`
        );
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();