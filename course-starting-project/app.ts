'use-strict'

let num: number;
let str: string;
let bool: boolean;
let obj: object;
let arr: any[];
let strArr: string[];
let numArr: number[];
let tuple: [number, string];
enum Enum { Admin, ReadOnly, Author };
let union: number | string | boolean;
let literal: 'this' | 'orthis' | 'only'
type Alias = number | string;
let fxn: Function;
let fxn2: (a: number, b: number) => number;
let userInput: unknown;


function add(n1: number, n2: number): number {
    console.log(typeof n1)
    return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (num : number) => void): void {
    cb(n1 + n2);
}

function printResult(result: string): void {
    console.log(result)
}

fxn2 = add;


const number1 = 5
const number2 = 2.8

const result = fxn2(number1, number2)
console.log('fxn2', result);

addAndHandle(number1, number2, (result) => {
    console.log(result)
})

const person = {
    name: 'Macmillan',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

//Person Object Inferred
console.log(person.name)


const ErrorHandler = (error: string): never => {
    throw new Error(error)
}

const error = ErrorHandler("error")