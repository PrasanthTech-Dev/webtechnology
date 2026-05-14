// 1 — Student Registration Form
// Create a program using?

// let name = prompt("Enter Student Name");
// let dept = prompt("Enter Department");
// const age = prompt("Enter Age");

// console.log(`Welcome ${name}`);
// console.log(`Department: ${dept}`);
// console.log(`Age: ${age}`);

// // Output:
// Welcome Prasanth
// Department: CS
// Age: 25

// 2 — ATM Withdrawal System?

// let balance = 10000;
// let amount = Number(prompt("Enter withdrawal amount:"));

// if (amount >= 100 && amount <= balance) {
//     console.log("Transaction Successful");
//     console.log(`Remaining Balance: ${balance - amount}`);

// } else if (amount < 100) {
//     console.log("Minimum withdrawal amount is 100");

// } else {
//     console.log("Insufficient Balance");

// }

// Output:
// Transaction Successful
// Remaining Balance: 3000

// 3 — Swiggy Discount Checker

// let orderAmount = Number(prompt("Enter order amount:"));

// if (orderAmount > 499) {
//     console.log("Free Delivery Available");

// } else {
//     console.log("Delivery Charges Applied");

// }

// Output:
// Free Delivery Available

//  4 — Instagram Login System

// const crtUsername = "prasanth";
// const crtPassword = "55766158";

// let username = prompt("Enter Username:");
// if (username === crtUsername) {

//     let password = prompt("Enter Password:");
//     if (password === crtPassword) {
//         console.log("Login Success");

//     } else {
//         console.log("Wrong Password");

//     }

// } else {
//     console.log("Invalid Username");

// }
// Output:
// Login Success.

// 5-Traffic Signal System

// let signal = prompt("Enter signal color (red / yellow / green):");

// switch (signal) {

//     case "red":
//         console.log("STOP");
//         break;

//     case "yellow":
//         console.log("READY");
//         break;

//     case "green":
//         console.log("GO");
//         break;

//     default:
//         console.log("Invalid Signal");

// }
// Output:
// GO

// 6 — Employee Salary Calculator

// function salaryCall(Salary, bonus) {
//     let totalSalary = Salary + bonus;

//     return totalSalary;

// }
// let result = salaryCall(25000, 5000);
// console.log(result);

// Output:
// 30000

// 7 — E-Commerce Cart Total

// let Rs = [100, 200, 300, 600];
// let total = 0;

// for (let i = 0; i < Rs.length; i++) {
//     total = total + Rs[i];
    
// }
// let avg = total / Rs.length;

// console.log("Total Price:", total);
// console.log("Average Price:", avg);
// OutPut:
// Total Price: 1200
// Average Price: 300

//  8 — WhatsApp Contact Book

// let contact = {
//     name: "Moorthi",
//     phone: "9855563210",
//     status: "Online"

// }

// for (let key in contact) {
//     console.log(`${key}: ${contact[key]}`);

// }
// Output:
// name: Moorthi
// phone: 9855563210
// status: Online

// 9 — Movie Ticket Booking

// function payment() {
//     console.log("Payment Successful");

// }

// function bookTicket(callback) {
//     console.log("Ticket Booking Completed");
    
//     callback();

// }

// bookTicket(payment);
// Output:
// Ticket Booking Completed
// Payment Successful

// 10 — Food Delivery Time Tracker

function* orderStatus() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
    
}

let order = orderStatus();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
// Output:
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered