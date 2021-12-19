/*
Calculator must be able to take two or more numbers and return a result based on operation(s) used.

MVP
---
1. User should be able to input a number, an operation, and a number
2. User should be able to clear display
3. User should be able to see result displayed, on enter and button click 

Steps:
-----
1. Display input as user types
  a) Get value of button clicked
  b) Concat value to str/arr*
  c) Update display w new str/arr*
  d) Operator seperate from input
    i> Get value of operator clicked
    ii> Perform calculation based on value operator clicked
  e) Start new str/arr after any operator clicked
  f) On submit calculate two arr/str
  e) Display result
2. Clear display
  a) Get value of button clicked
  b) If value is equal to ac/AC
  a) Set display to 0
*/


let cl = console.log;

// Get Operators
let addition = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");

// Get Elements
let equals = document.querySelector("#equals");
let userInput = document.querySelector(".txt-area > p");
let calItems = document.querySelectorAll(".cal-item");
let clear = document.querySelector("#clear");
let operators = document.querySelectorAll(".org");

// CALC FUNCTION
const calculator = (num1, oper, num2) => {
  if(oper === "+") {
    let sum = num1 + num2;
    userInput.textContent = sum;
  } else if(oper === "-") {
    let difference = num1 - num2;
    cl(userInput.textContent = difference);
  } else if(oper === "/") {
    let quotient = num1 / num2;
    userInput.textContent = quotient;
  } else {
    let product = num1 * num2;
    userInput.textContent = product;
  }
}

calculator(prompt("Enter a number: "), prompt("Enter operation(+,-,/,*): "), prompt("Enter second number: "));

// RESET 
clear.addEventListener("click", () => {
  userInput.textContent = 0;
  cl("Reset Successful: ", userInput.textContent);
})
