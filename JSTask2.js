// JavaScript Tasks – Type Casting & Flow Control
// Task 1 – Predict the Output
// Write the output and datatype for below?

// console.log(typeof("10" + 5))
// Output:105
// Datatype:String

// console.log(typeof(10 + true))
// Output:11
// Datatype:number

// console.log(typeof(false + null))
// Output:0
// Datatype:number

// console.log(typeof("Hello" + undefined))
// Output:Helloundefined
// Datatype:String

// console.log(typeof([1,2] + 5))
// Output:1,25
// Datatype:String


// Task 2 – Implicit Type Casting
// Create examples for?

// String + Number
// console.log("Age:"+25);
// console.log(typeof("Age:"+25));
// Output:Age:25
// Datatype:String

// Boolean + Number
// console.log(true+27);
// console.log(typeof(true+27));
// Output:28
// Datatype:number

// Array + String
// console.log([1,2,3]+"val");
// console.log(typeof([1,2,3]+"val"));
// Output:1,2,3val
// Datatype:String

// Object + Number
// console.log({y:15}+21);
// console.log(typeof({y:15}+21));
// Output:[object Object]21
// Datatype:string

// Null + Number
// console.log(null+7);
// console.log(typeof(null+7));
// Output:7
// Datatype:number

// Print datatype using typeof.

// Task 3 – Explicit Type Casting
// Convert the following into Number?

// "500"
// console.log(Number("500"));
// console.log(typeof(Number("500")));
// Output:500

// true
// console.log(Number(true));
// console.log(typeof(Number(true)));
// Output:1

// false
// console.log(Number(false));
// console.log(typeof(Number(false)));
// Output:0

// null
// console.log(Number(null));
// console.log(typeof(Number(null)));
// Output:0

// "abc"
// console.log(Number("abc"));
// console.log(typeof(Number("abc")));
// Output:NaN

// [100]
// console.log(Number([100]));
// console.log(typeof(Number([100])));
// Output:100

// Print the outputs.

// Task 4 – Boolean Constructor
// Check whether below values are true or false using Boolean()?

// ""
// console.log(Boolean(""));
// Output:false

// "javascript"
// console.log(Boolean("javascript"));
// Output:true

// 0
// console.log(Boolean(0));
// Output:false

// 1
// console.log(Boolean(1));
// Output:true

// null
// console.log(Boolean(null));
// Output:false

// undefined
// console.log(Boolean(undefined));
// Output:false

// []
// console.log(Boolean([]));
// Output:true

// {}
// console.log(Boolean({}));
// Output:true

// Task 5 – Student Pass or Fail
// Take one variable?

// let mark = 45
// Condition:
// Above 35 → Pass
// Below 35 → Fail
// Use if else.
// Output:
// let studentmark = 37
// if (studentmark > 35){
//     console.log("Pass");
    
// }else{
//      console.log("Fail");
// }

// Ans:Pass
   
// Task 6 – Voting Eligibility
// Create a variable?

// let age = 20
// Conditions:
// 18 and above → Eligible
// Otherwise → Not Eligible
// Output:
// let age = 18
// if (age >= 18){
//     console.log("Eligible");
    
// }else{
//     console.log("Not Eligible");
    
// }
// Ans:Eligible


// Task 7 – Greatest Number
// Find greatest among 3 numbers using if else if ?
// Example:
// let a = 50
// let b = 80
// let c = 30
// Output:
// let a = 25
// let b = 500
// let c = 100
// if (a > b && a > c){
//     console.log("a is greater");
    
// }else if (b > a && b > c) {
//     console.log("b is greater");
    
    
// } else {
//     console.log("c is greater");
       
// }
// Ans:b is greater

// Task 8 – Traffic Light System
// Using switch statement?
// red → stop
// yellow → ready
// green → go
// Output:
// let trafficlight = "green"
// switch (trafficlight) {
//     case "red": console.log("stop vechile");
    
        
//         break;
//      case "yellow": console.log("start vechile");
    
        
//         break;
//      case "green": console.log("let's go vechile");
    
        
//         break;

//     default: console.log("have a nice day to all");
    
//         break;
// }
// Ans:let's go vechile

// Task 9 – Login System
// Create variables:
// let username = "admin"
// let password = "1234"
// Conditions:
// Both correct → Login Success
// Otherwise → Invalid Login
// Use nested if.
// Output:
// let username = "prasanth"
// let password = "55511178"
// if (username === "prasanth"){
//     if(password === "55511178"){
//         console.log("Login Success");
        

//     }else {
//         console.log("Invalid Login");
//     }
    
// }else {
//     console.log("Invalid Login");
// }
// Ans:Login Success

// Task 10 – Session Finder
// Take hour value?
// let hour = 14
// Conditions:
// 1–12 → Morning
// 13–15 → Afternoon
// 16–19 → Evening
// 20–24 → Night
// Use else if.
// let hour = 17
// if (hour >= 1 && hour <= 12){
//     console.log("Morning");
    
// }else if (hour >= 13 && hour <= 15){
//     console.log("Afternoon");
    
// }else if (hour >= 16 && hour <= 19){
//     console.log("Evening");

// }else if (hour >= 20 && hour <= 24){
//     console.log("Night");
    
// }else{
//     console.log("check correct time");
    
// }
// Ans:Evening

// Bonus Challenge 
// Predict outputs without running?

// console.log(true + true)
// Output:2,Dtype:Number

// console.log("5" - 2)
// Output:3,Dtype:Number

// console.log("5" + 2)
// Output:52,Dtype:String

// console.log(null + 1)
// Output:1,Dtype:Number

// console.log(undefined + 1)
// Output:NaN,Dtype:Number

// console.log(Boolean(" "))
// Output:true

// console.log(Number(true))
// Output:1