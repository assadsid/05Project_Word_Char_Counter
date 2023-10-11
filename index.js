#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blueBright("****Welcome to the Words & Characters Count App****"));
function characterCount(paragraph) {
    let spaceFree = paragraph.replace(/\s/g, "");
    return spaceFree.length;
}
function wordCountMain(paragraph) {
    let wordCount = paragraph.split(" ");
    function checkString(element) {
        return typeof element === "string";
    }
    return wordCount.length;
}
async function userInput(characterCount, wordCountMain) {
    let response = await inquirer.prompt({
        type: "input",
        message: "Please enter your text here:",
        name: "paragraph"
    });
    console.log(chalk.bold.greenBright("Total Characters Count = " + characterCount(response.paragraph)));
    console.log(chalk.bold.greenBright("Total Words Count = " + wordCountMain(response.paragraph)));
}
userInput(characterCount, wordCountMain);
