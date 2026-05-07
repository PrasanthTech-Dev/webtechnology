// Section 1: Variables (1–8)
// 1.What is the output?

var a = 10;
a = 15;
console.log(a);

// Ans:15


// 2.What happens here?

let b = 20;
let b = 30;
console.log(b);


// Ans:Error: SyntaxError: Identifier 'b' has already been declared.

// 3.What is the output?

const c = 50;
console.log(c);

// Ans:50

// 4.Identify error:

const x = 10;
x = 20;
console.log(x);


// Ans: Error: Type of Error: Assignment to constant variable.

// 5.Output?

var p = 5;
var p = 10;
console.log(p);

// Ans:10

// 6.Output?

let q = 25;
q = q + 10;
console.log(q);

// Ans:(25 + 10 = 35) 35

// 7.Output?

const r = 7;
console.log(r + 3);

// Ans:(7+3=10) 10

// 8.Fill correct keyword:

let a = 10;

// Ans:let


// Section 2: Console Methods (9–12)
// 9. Which method prints normal output?

// Ans:console.log()

// 10. Which method shows warning?

// Ans:console.warn()

// 11. Which method shows error?

// Ans:console.error()

// 12. What does this do?

// Ans:console.clear();
// It clears the console screen


// Section 3: Data Types (13–18)

// 13.Output?

let a = "hello";
console.log(typeof a);

// Ans:string

// 14.Output?

let b = 100;
console.log(typeof b);

// Ans:number

// 15.Output?

let c = false;
console.log(typeof c);

// Output:boolean

// 16.Output?

let d;
console.log(d);

// Ans:undefined
// (variable declared but not assigned value)

// 17.What is type of null?

let value = null;

console.log(typeof value);

// Ans:object

// 18.Convert string to number:"25"

let str = "25";

let num = Number(str);

console.log(num);

// Ans:25

// Section 4: Arrays (19–24)
// 19. Create array of 3 fruits?

let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// Ans:["apple", "banana", "mango"]

// 20.Output?

let arr = ["a","b","c"];
console.log(arr[1]);

// Ans:b

// 21.Output?

let arr = ["x","y","z"];
console.log(arr[arr.length-1]);

// Ans:z

// 22. How to get first element?
// Ans: arr[0];

// 23.Output?

let arr = ["apple","banana"];
console.log(arr.length);

// Ans:2

// 24. Add new element to array?

let fruits = ["Apple", "Banana"];

let newFruits = [...fruits, "Orange"];

console.log(newFruits);

// Ans:["Apple", "Banana", "Orange"]

// Section 5: Objects (25–28)

// 25. Create object with name & age?

let Male ={
    name:"Jhon",
    age: 25
};
console.log(Male);

// Ans:{ name: 'Jhon', age: 25 }

// 26.Output?

let obj = {name:"Jhon"};
console.log(obj.name);

// Ans:Jhon

// 27.Output?

let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[1]);

// Ans:banana

// 28. How to access last element inside object array?

let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[obj.fruits.length - 1]);

// Ans:banana

// Section 6: Arithmetic Operators (29–32)
// 29.Output?
console.log(5 + 3);
// Ans:8

// 30.Output?
console.log(10 % 3);
// Ans:1

// 31.Output?
console.log(2 ** 3);
Ans:8

// 32.Output?
console.log(10 / 2);
// Ans:5

// Section 7: Increment / Decrement (33–36)
// 33.Output?
let a = 5;
a++;
console.log(a);
// Ans:6

// 34.Output?
let b = 5;
let c = b++;
console.log(b, c);
// Ans:6  5

// 35.Output?
let x = 5;
let y = ++x;
console.log(x, y);
// Ans:6  6

// 36.Output?
let m = 3;
let n = m--;
console.log(m, n);
// Ans:2  3

// Section 8: Comparison & Logical (37–39)
// 37.Output?
console.log(5 == "5");
// Ans:true

// 38.Output?
console.log(5 === "5");
// Ans:false

// 39.Output?
console.log(true && false || true);
// Ans:true

// Section 9: Ternary (40)
// 40.Output?
5 > 3 ? console.log("Yes") : console.log("No");
// Ans:Yes