// 1. Student Attendance System

// const presentStudents = ["jana", "moorthi", "maha"];
// const absentStudents = ["meena", "raja"];

// const mergeStudents = (...students) => students.flat();

// const finalStudents = mergeStudents(
//     presentStudents,
//     absentStudents,
//     ["vijay"]
// );
// console.log("Final Student List:");

// finalStudents.forEach((student, index) => {
//     console.log(`${index + 1}. ${student}`);

// });

// Output:
// 1. jana
// 2. moorthi
// 3. maha
// 4. meena
// 5. raja
// 6. vijay

// 2. E-Commerce Cart

// let mobileDetails = {
//     brand: "Samsung",
//     model: "Galaxy S24",
//     price: 75000
// };

// let chargerDetails = {
//     chargerType: "Fast Charger",
//     warranty: "1 Year"
// };

// let finalCart = {
//     ...mobileDetails,
//     ...chargerDetails,
//     deliveryDate: "20-05-2026"
// };

// let carts = Object.entries(finalCart);

// console.log("Amazon Final Cart Details:");

// carts.forEach(([key, value]) => {
//     console.log(`${key} : ${value}`);

// });
// Output:
// Amazon Final Cart Details:
// brand : Samsung
// model : Galaxy S24
// price : 75000
// chargerType : Fast Charger
// warranty : 1 Year
// deliveryDate : 20-05-2026

// 3. Food Delivery App

// function orderFood(...items) {

//     console.log("Food Order Details:", items.length);

//     console.log("First item:", items[0]);

//     console.log("Last item:", items[items.length - 1]);

// }

// orderFood(
//     "Dosa",
//     "Poori",
//     "Pongal",
//     "Noodles",
//     "Fried Rice" 
// );

// Output:
// Food Order Details: 5
// First item: Dosa
// Last item: Fried Rice

// 4. Employee Salary Filter

// let emp = [
//     {
//         name: "moorthi",
//         salary: 45000
//     },
//     {
//         name: "Meena",
//         salary: 60000
//     },
//     {
//         name: "sathish",
//         salary: 75000
//     },
//     {
//         name: "maha",
//         salary: 40000
//     },
//     {
//         name: "prasanth",
//         salary: 100000
//     }
// ];

// let HighSalaryEmployees = emp.filter(emp => {
//     return emp.salary > 50000;

// });

// console.log("Employees with Salary Above 50000:");

// HighSalaryEmployees.forEach(emp => {
//     console.log(`${emp.name} : ${emp.salary}`);

// });

// Output:
// Employees with Salary Above 50000:
// Meena : 60000
// sathish : 75000
// prasanth : 100000

// 5. Online Game Score Board

let scores = [100, 200, 150, 250, 300];

let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

console.log("Players Final Total Score:", totalScore);
// Output:
// Players Final Total Score: 1000