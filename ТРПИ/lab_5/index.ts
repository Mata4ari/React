const isFetching: boolean = true;
const isLoading: boolean = false;

type Flat={
    nomer:number;
    vladelec:string;
}
type Dom={
    nomer:number;
    ulica:string;
}
type Floor={
    numofFlats:number;
    numJilcov:number;
    floor:number;
}

interface House{
    numofFlats:number;
    flats:Flat[];
    floors:Floor[];
    nomerDoma:Dom
}

let house:House = {
    numofFlats:40,
    flats:[{nomer:4,vladelec:'Maksim'}],
    floors:[{floor:1,numofFlats:2,numJilcov:4}],
    nomerDoma:{nomer:54,ulica:'Esenina'}
};


let num: number = 42;

const big_num: number = 3e10;

const message: string = "Hello Typescript";

const numberArray: number[] = [1,2,3,4,5,6,7,8,9,10];
const numberArray2: Array<number> = [1,2,3,4,5,6,7,8,9,10];

const words: string[] = ['Hello', 'World'];

// Tuple

const contact: [string, number] = ['Vlad', 1234567];

let variable: any = 42

variable = 'New string'

// =================================================================
function sayMyName(name: string) : void {
    console.log(name)
}

sayMyName('Никита')

function throwError(message: string) : never {
    throw new Error(message)
}

// Type

type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type test = {
    login: Login,
    id: ID
}

const obj: test = {login: 'login', id: 1234}

type SomeType = string | null | undefined

interface Rect{
    readonly id: string
    color?: string
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {width: 800, height: 600}
}

const rect2: Rect = {
    id: '12345',
    size: {width: 800, height: 600}
}
rect2.color = 'black'

const rect3 = {} as Rect
rect3.color = 'White'

//================================================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {width: 800, height: 600},

    getArea(): number {
        return this.size.width * this.size.height;
    }
}

//================================================================

interface IClock {
    date: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    date: Date = new Date();

    setTime(date: Date): void {
        this.date = date
    }
}

//============================================================================
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK'
}

const social = SocialMedia.FACEBOOK
console.log(social)


//============================================================================

function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a:number):MyPosition
function position(a: number, b: number): MyPosition 

function position(a?: number, b?: number) {
    if(!a && !b) {
        return {x: undefined, y: undefined};
    }

    if(a && !b) {
        return {x: a, y: undefined, default: a.toString()};
    }

    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One parm: ', position(5))
console.log('Two params', position(10, 15))

//============================================================================

class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car{
    readonly numberOfwheels: number = 4

    constructor(readonly model: string) {}
}

//============================================================================

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}


const cat = new Cat()
cat.setVoice('test')

//================================================================================================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponnt extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return "This is info"
    }
}

//================================================================================================

function strip(x: string | number) {
    if(typeof x === 'number'){
        return x.toFixed(2)
    }

    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    error = 'error result'   
}

function handle(res: MyResponse | MyError){
    if(res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    }
    else {
        return {
            info: res.header + res.error
        }
    }
}

//================================================================================================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {

}

setAlertType('success')
setAlertType('danger')

//================================================================================================

const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]

function reverse<T>(array: T[]) {
    return array.reverse()
}

//================================================================================================

interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeys = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMeta = Pick<User, 'name' | 'email'>

let u1: UserKeys = 'name'