#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate random number
// 2) User  input for guessing number
// 3) compare user input with computer generated number & show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGusessedNumber",
        type: "number",
        message: "Please guess a number B/W 1-10:",
    },
]);
if (answers.userGusessedNumber === randomNumber) {
    console.log("congratulation You Win.");
}
else {
    console.log("You Lose.");
}
