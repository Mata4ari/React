const isFetching = true;
const isLoading = false;
let num = 42;
const big_num = 3e10;
const message = "Hello Typescript";
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words = ['Hello', 'World'];
// Tuple
const contact = ['Vlad', 1234567];
let variable = 42;
variable = 'New string';
// =================================================================
function sayMyName(name) {
    console.log(name);
}
sayMyName('Никита');
function throwError(message) {
    throw new Error(message);
}
const login = 'admin';
const id1 = 1234;
const id2 = '1234';
const obj = { login: 'login', id: 1234 };
const rect1 = {
    id: '1234',
    size: { width: 800, height: 600 }
};
const rect2 = {
    id: '12345',
    size: { width: 800, height: 600 }
};
rect2.color = 'black';
const rect3 = {};
rect3.color = 'White';
const rect5 = {
    id: '123',
    size: { width: 800, height: 600 },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class Clock {
    constructor() {
        this.date = new Date();
    }
    setTime(date) {
        this.date = date;
    }
}
//============================================================================
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.FACEBOOK;
console.log(social);
//============================================================================
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('One parm: ', position(5));
console.log('Two params', position(10, 15));
//============================================================================
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfwheels = 4;
    }
}
//============================================================================
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice('test');
//================================================================================================
class Component {
}
class AppComponnt extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return "This is info";
    }
}
//================================================================================================
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'response result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.error = 'error result';
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.error
        };
    }
}
function setAlertType(type) {
}
setAlertType('success');
setAlertType('danger');
//================================================================================================
const arrayOfNumbers = [1, 2, 3, 4, 5];
function reverse(array) {
    return array.reverse();
}
let key = 'name';
key = 'age';
let u1 = 'name';
