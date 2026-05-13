// 1 — Basic Function
// Create a function called welcomeUser?

// function welcomeUser(name) {
//     console.log("Welcome " + name);

// }

// welcomeUser("Prasanth");

// Output:
// Welcome Prasanth

// 2 — Parameter + Return
// Create a function squareNumber?

// function squareNumber(num) {
//     return num * num;

// }

// console.log(squareNumber(5));

// Output:
// 25

// 3 — Object Function
// Create an object?

// let emp = {
//     name: "Prasanth",
//     salary: 50000
// }

// function empBonus(bonus) {
//     console.log("Name:", emp.name);
//     console.log("Total Salary:", emp.salary + bonus);

// }

// empBonus(5000);

// Output:
// Name: Prasanth
// Total Salary: 55000

// 4 — Scope Checking
// Inside a function?

// function checkScope() {
//     var a = "Var Variable";
//     let b = "Let Variable";
//     const c = "Const Variable";

//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// checkScope();

// Output:
// Var Variable
// Let Variable
// Const Variable

// 5 — Arrow Function
// Convert this into arrow function?

// const add = (a, b) => {
//     console.log(a + b);

// }

// add(10, 20);

// Output:
// 30

// 6 — Callback Function?

// function multiply(a, b) {
//     return a * b;

// }

// function calculator(callback, num1, num2) {
//     console.log(callback(num1, num2));

// }

// calculator(multiply, 10, 7);

// Output:
// 70

// 7 — Generator Function
// Create generator function offers?

// function* offers() {
//     yield "50% OFF";
//     yield "Free Delivery";
//     yield "Cashback";

// }

// let offer = offers();

// console.log(offer.next().value);
// console.log(offer.next().value);
// console.log(offer.next().value);

// Output:
// 50% OFF
// Free Delivery
// Cashback


// 8 — Default Parameter Create?

// function student(name, course = "JavaScript") {
//     console.log("Name:", name);
//     console.log("Course:", course);

// }

// student("Moorthi");
// student("Jana");
// Output:
// Name: Moorthi
// Course: JavaScript
// Name: Jana
// Course: JavaScript

// 9 — Currying
// Create currying function for multiplication?

// function multi(i) {
//     return function(j) {
//         return function(k) {
//             return i * j * k;
//         }
//     }
// }

// console.log(multi(2)(3)(4));
// Output:
// 24

// 10 — Spread Operator
// Merge these arrays?

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let mergedArray = [...arr1, ...arr2];

// console.log(mergedArray);

// Output:
// [ 1, 2, 3, 4, 5, 6 ]

// 11 — Object Spread Merge two objects?

// let obj1 = {
//     name: "John"
// };

// let obj2 = {
//     role: "Developer"
// };

// let mergedObject = { ...obj1, ...obj2 };

// console.log(mergedObject);

// Output:
// { name: 'John', role: 'Developer' }

// 12 — Rest Operator Create function/

// function numbers(...num) {
//     console.log(num);

//     let sum = 0;

//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];

//     }

//     console.log(sum);

// }

// numbers(1, 2, 3, 4);

// Output:
// [ 1, 2, 3, 4 ]
// 10

// Mini Challenge 
// Create one small Student Management System using:

let students = [];

// 1. Add Student (Rest Operator - multiple subjects marks)
function addStudent(name, age, ...marks) {
    const student = {
        name: name,
        age: age,
        marks: marks
    };
    students.push(student);
    console.log(` Student Added: ${name}`);

}

// 2. Print All Students (Callback)
function printStudents(callback) {
    console.log("\n Student List:");
    console.log("================");
    students.forEach(callback);

}

// 3. Calculate Total Marks
function calculateMarks(student) {
    const total = student.marks.reduce((sum, mark) => sum + mark, 0);
    const avg = total / student.marks.length;
    console.log(` Name: ${student.name} | Age: ${student.age}`);
    console.log(`   Marks: [${student.marks}]`);
    console.log(`   Total: ${total} | Average: ${avg.toFixed(2)}`);
    console.log("----------------");

}

// 4. Add Bonus Marks (Spread Operator)
function addBonusMarks(studentName, bonusMarks) {
    const student = students.find(s => s.name === studentName);
    if (student) {
        student.marks = [...student.marks, bonusMarks];
        console.log(`\n Bonus ${bonusMarks} marks added to ${studentName}`);
    } else {
        console.log(` Student ${studentName} not found!`);
    }

}


// Adding Students
addStudent("Moorthi", 20, 85, 90, 78, 98);
addStudent("Jana", 22, 70, 65, 80, 66);
addStudent("John", 21, 95, 88, 77, 92);
addStudent("Maha", 25, 55, 95, 85, 54);
addStudent("Sathish", 44, 66, 23, 91, 77);

// Print + Calculate Marks (Callback)
printStudents(calculateMarks);

// Add Bonus Marks
addBonusMarks("Moorthi", 7);
addBonusMarks("John",  4);
addBonusMarks("Sathish",  8);

// Print Again After Bonus
printStudents(calculateMarks);

// Output:
// Student Added: Moorthi
//  Student Added: Jana
//  Student Added: John
//  Student Added: Maha
//  Student Added: Sathish

//  Student List:
// ================
//  Name: Moorthi | Age: 20
//    Marks: [85,90,78,98]
//    Total: 351 | Average: 87.75
// ----------------
//  Name: Jana | Age: 22
//    Marks: [70,65,80,66]
//    Total: 281 | Average: 70.25
// ----------------
//  Name: John | Age: 21
//    Marks: [95,88,77,92]
//    Total: 352 | Average: 88.00
// ----------------
//  Name: Maha | Age: 25
//    Marks: [55,95,85,54]
//    Total: 289 | Average: 72.25
// ----------------
//  Name: Sathish | Age: 44
//    Marks: [66,23,91,77]
//    Total: 257 | Average: 64.25
// ----------------

//  Bonus 7 marks added to Moorthi

//  Bonus 4 marks added to John

//  Bonus 8 marks added to Sathish

//  Student List:
// ================
//  Name: Moorthi | Age: 20
//    Marks: [85,90,78,98,7]
//    Total: 358 | Average: 71.60
// ----------------
//  Name: Jana | Age: 22
//    Marks: [70,65,80,66]
//    Total: 281 | Average: 70.25
// ----------------
//  Name: John | Age: 21
//    Marks: [95,88,77,92,4]
//    Total: 356 | Average: 71.20
// ----------------
//  Name: Maha | Age: 25
//    Marks: [55,95,85,54]
//    Total: 289 | Average: 72.25
// ----------------
//  Name: Sathish | Age: 44
//    Marks: [66,23,91,77,8]
//    Total: 265 | Average: 53.00