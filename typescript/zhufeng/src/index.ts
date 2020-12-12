import { Interface } from "readline";

const str:string = 'hello';
console.log(str);

function toArray(value: number): number[]
function toArray(value: string): string[]
function toArray(value: number | string): number[] | string[] {
    if (typeof value == 'string') {
        return value.split('');
    } else {
        return value.toString().split('').map(item => parseInt(item));
    }
}
console.log(toArray(123));

let arrOfNumbers: any[] = [1, 2, 3, 5];
arrOfNumbers.push('strt');

interface Person {
    name: string;
    age: number;
}

let viking: Person = {
    name: 'vikeing',
    age: 20,
}
