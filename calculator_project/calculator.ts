import inquirer from "inquirer";
import chalk from "chalk";
//import chalkAnimation from "chalk-animation";
import {Addition} from "./add.js";
import { Subtraction } from "./sub.js";
import { Multiply } from "./multiply.js";
import { Division } from "./division.js";
import { Exponent } from "./exponent.js";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};

async function getStarted() {
   // let Animation = chalkAnimation.rainbow("Lets Gets Calculated");
    await sleep();
    //nimation.stop();
    console.log(chalk.blue(`
     _____________________
    |  _________________  |
    | |casio           0. | 
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|\n`));
}
await getStarted();
let answer= await inquirer.prompt([
 {
    message:"Enter first number: ",
    type:"number",
    name:"num1"
},
{
    message:"Enter second number: ",
    type:"number",
    name:"num2"
},
{   message:"Select operator: ",
    type:"list",
    name:"operator",
    choices:["Add","Subtract","Multiply","Division","Exponent"]

}
])

if(answer.operator=== "Add"){
    let result= Addition(answer.num1,answer.num2)
    console.log(result);
}
else if(answer.operator=== "Subtract"){
    let result= Subtraction(answer.num1,answer.num2)
    console.log(result)
}
else if(answer.operator=== "Multiply"){
    let result= Multiply(answer.num1,answer.num2)
    console.log(result)
}
else if(answer.operator=== "Division"){
    let result= Division(answer.num1,answer.num2)
    console.log(result)}

else if(answer.operator=== "Exponent"){
    let result= Exponent(answer.num1,answer.num2)
    console.log(result)}