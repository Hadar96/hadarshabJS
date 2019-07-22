class cPerson {
    constructor(name, age, password, gender, vehicle) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
        this.vehicle = vehicle;
    }

    toString = function () {
        return (`Person as Class: \n Name: ${this.name} \n Age: ${this.age} \n Password: ${this.password} \n Gender: ${this.gender} \n Vehicle: ${this.vehicle}`);
    }
}

function fPerson(name, age, password, gender, vehicle) {
    this.name = name
    this.age = age
    this.password = password
    this.gender = gender;
    this.vehicle = vehicle;

    this.toString = () => {
        return (`Person as Function: \n Name: ${this.name} \n Age: ${this.age} \n Password: ${this.password} \n Gender: ${this.gender} \n Vehicle: ${this.vehicle}`);
    }
}
