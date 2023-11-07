import inquirer from "inquirer";
import chalk from "chalk";
import { accountHolder } from "./users.js";
async function authentication(name, pin) {
    for (let i = 0; i < accountHolder.length; i++) {
        if (name === accountHolder[i].name) {
            if (pin === accountHolder[i].pin) {
                return true;
            }
        }
    }
    return false;
}
async function cardInserted() {
    let details = await inquirer.prompt([
        {
            name: "userName",
            type: "input",
            message: "Enter your name:"
        },
        {
            name: "pin",
            type: "number",
            message: "Enter your pin:"
        }
    ]);
    if (await authentication(details.userName, details.pin)) {
        let option = await inquirer.prompt([
            {
                name: "Mode",
                type: "list",
                message: "Current or Saving:",
                choices: ["Current", "Saving"]
            },
            {
                name: "Transaction",
                type: "list",
                message: "Select your mode of transactions:",
                choices: ["Deposit", "Withdraw"]
            },
            {
                name: "Amount",
                type: "number",
                message: "Enter your amount:",
            }
        ]);
        if (option.Mode === "Current") {
            if (option.Transaction === "Deposit") {
                for (let i = 0; i < accountHolder.length; i++) {
                    if (details.userName === accountHolder[i].name) {
                        let amount = accountHolder[i].current.balance;
                        accountHolder[i].current.balance += option.Amount;
                        console.log(chalk.bgRed.white(`Your previous balance was ${amount}, now it is ${accountHolder[i].current.balance}`));
                        return;
                    }
                }
            }
            else {
                for (let i = 0; i < accountHolder.length; i++) {
                    if (details.userName === accountHolder[i].name) {
                        let amount = accountHolder[i].current.balance;
                        if (option.Amount < amount) {
                            accountHolder[i].current.balance -= option.Amount;
                            console.log(chalk.yellowBright("Withdraw Successful"));
                            console.log(chalk.bgRed.white(`Your previous balance was ${amount}, now it is ${accountHolder[i].current.balance}`));
                            return;
                        }
                        else {
                            console.log(chalk.yellowBright("Withdraw Not Successful, due to insufficient funds."));
                            return;
                        }
                    }
                }
            }
        }
        else {
            if (option.Transaction === "Deposit") {
                for (let i = 0; i < accountHolder.length; i++) {
                    if (details.userName === accountHolder[i].name) {
                        let amount = accountHolder[i].saving.balance;
                        accountHolder[i].saving.balance += option.Amount;
                        console.log(chalk.bgRed.white(`Your previous balance was ${amount}, now it is ${accountHolder[i].saving.balance}`));
                        return;
                    }
                }
            }
            else {
                for (let i = 0; i < accountHolder.length; i++) {
                    if (details.userName === accountHolder[i].name) {
                        let amount = accountHolder[i].saving.balance;
                        if (option.Amount < amount) {
                            accountHolder[i].saving.balance -= option.Amount;
                            console.log(chalk.yellowBright("Withdraw Successful"));
                            console.log(chalk.bgRed.white(`Your previous balance was ${amount}, now it is ${accountHolder[i].saving.balance}`));
                            return;
                        }
                        else {
                            console.log(chalk.yellowBright("Withdraw Not Successful, due to insufficient funds."));
                            return;
                        }
                    }
                }
            }
        }
    }
    else {
        console.log(chalk.yellowBright("\nAccess denied"));
        return;
    }
}
cardInserted();
