// Looping Statements
// 1. Print numbers from 1 to 20 using a for loop?

// for(let i = 1; i <= 20; i++){
//     console.log(i);
    
// } 
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

// 2. Print all odd numbers?

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }

// }
// Output:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
// 21
// 23
// 25
// 27
// 29

// 3. Print the multiplication table of 7?

// for (let i = 1; i <= 20; i++) {
//     console.log("7 x " + i + " = " + (7 * i));

// }

// Output:
// PS C:\Users\prasa\OneDrive\Desktop\JS Project> node JSTask3.js
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
// 7 x 11 = 77
// 7 x 12 = 84
// 7 x 13 = 91
// 7 x 14 = 98
// 7 x 15 = 105
// 7 x 16 = 112
// 7 x 17 = 119
// 7 x 18 = 126
// 7 x 19 = 133
// 7 x 20 = 140

// 4. Reverse Counting Using while loop, print numbers from 20 to 1?

// let Recount = 20;

// while (Recount >= 1) {
//     console.log(Recount);
//     Recount--;

// }
// Output:
// 20
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// 5. Find the total sum of numbers from 1 to 100?

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;

// }

// console.log("Total Sum = " + sum);

// Output:
// Total Sum = 5050

// 6. Array Loop?

// let fruits = ["apple", "banana", "orange", "grapes"];

// for (let a = 0; a < fruits.length; a++) {
//     console.log(fruits[a]);

// }
// Output:
// apple
// banana
// orange
// grapes

// 7. Count how many even numbers are present between 1 to 50?

// let count = 0;

// for (let a = 1; a <= 50; a++) {
//     if (a % 2 === 0) {
//         count++;
//     }

// }

// console.log("Total even numbers:", count);

// Output:
// Total even numbers: 25

// 8. Print this pattern using loops?
// *
// **
// ***
// ****
// *****

// for (let x = 1; x <= 5; x++) {
//     let pattern = "";

//     for (let y = 1; y <= x; y++) {
//         pattern += "*";
//     }

//     console.log(pattern);

// }
// Output:
// *
// **
// ***
// ****
// *****

// 9. Create a function named welcome() that prints
//    Welcome to JavaScript?

// function welcome() {
//     console.log("Welcome to JavaScript");

// }

// welcome();

// Output:
// Welcome to JavaScript

// 10. Function with Parameter

// function like(name) {
//     console.log("Hello " + name);

// }

// like("Prasanth");

// Output:
// Hello Prasanth

// 11. Add Two Numbers
// Create a function that takes 2 numbers and returns the addition?

// function add(a, b) {
//     return a + b;

// }

// console.log(add(30, 40));
// Output:
// 70

// 12. Salary Bonus
// Create a function that adds bonus to employee salary?

// function TotalSalary(salary, bonus) {
//     return salary + bonus;

// }

// let salary = 300000;
// let bonus = 7000;

// console.log(TotalSalary(salary, bonus));

// Output:
// 307000

// 13. Object Loop
// Print all keys and values using for in?

// let student = {
//     name: "Sathish",
//     course: "JavaScript",
//     marks: 98

// }

// for (let a in student) {
//     console.log(a + " : " + student[a]);

// }
// Output:
// name : Sathish
// course : JavaScript
// marks : 98

// 14. Find Largest Number
// Create a function to find the largest number between two values?

// function largest(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }

// }

// console.log(largest(25, 75));
// Output:
// 75

// 15. Mini Employee Task
// Create an employee object and print?

let employee1 = {
    name: "Prasanth",
    department: "Software",
    salary: 50000

}
function addBonus(emp1, bonus) {

    let TotalSalary = emp1.salary + bonus;

    console.log("Employee Name: " + emp1.name);
    console.log("Department: " + emp1.department);
    console.log("Salary: " + emp1.salary);
    console.log("Salary after bonus: " + TotalSalary);

}

addBonus(employee1, 7000);

// Output:
// Employee Name: Prasanth
// Department: Software
// Salary: 50000
// Salary after bonus: 57000