
import _ from 'lodash';

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return _.join(["Hello", ' ', this.greeting], ',');
        // return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

console.log(greeter.greet());
