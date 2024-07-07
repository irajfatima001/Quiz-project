#!/usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1: What is TypeScript primarily used for?",
        choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2: Which of the following is NOT a valid TypeScript data type?",
        choices: ["void", "any", "dynamic", "tuple"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3: How do you denote a variable as readonly in TypeScript?",
        choices: ["const", "static", "readonly", "fixed"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4: How do you specify a function type in TypeScript that takes in a number and returns a string?",
        choices: ["function(num: number) -> string", "function: (number) => string", "(num: number) => string", "Function(number): string"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:In TypeScript, how do you enforce a variable to be of a specific type at compile time? ",
        choices: ["Using the force keyword", "Using the type keyword", "By using type annotations", "By casting the variable"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Static Typing":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question_2) {
    case "dynamic":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question_3) {
    case "readonly":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question_4) {
    case "(num: number) => string":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question_5) {
    case "By using type annotations":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score : ${score}`);
