import inquirer from "inquirer";
import chalk from "chalk";

const removeSpace = (paragraph: string) => paragraph.replace(/\s/g, "").length

async function startCounting() {
    console.log(chalk.yellowBright("Word Counting App:"))

    let check:boolean = true;
    do{  
        let paragraph = await inquirer.prompt({
            name: "passage",
            type: "input",
            message: "Enter your passage: "
        });

        console.log(`Total Words: ${chalk.redBright(removeSpace(paragraph.passage))}`);
        
        let result = await inquirer.prompt({
            name: "continue",
            type: "list",
            message: "Would you like to continue:",
            choices: ["Yes", "No"]
        });

        check = result.continue === "Yes";

    }while(check)
}

startCounting()