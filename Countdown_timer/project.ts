import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const myTimer = await inquirer.prompt([
    {
        name: "time",
        type: "number",
        message: "Enter an amount in seconds:",
        validate: (input) => {
            if(isNaN(input))
            {
                return "Enter valid number.";
            }
            else if(input > 60)
            {
                return "value is not greater than 60.";
            }
            else
            {
                return true;
            }
        }
    }
]);

function countDown(time:number)
{
    time += 2;
    const theTime = new Date().setSeconds(new Date().getSeconds() + time);
    const timeInterval = new Date(theTime);

    setInterval(() => {
        const current = new Date();
        const timeDifference = differenceInSeconds(timeInterval, current);

        if(timeDifference <= 0)
        {
            console.log(chalk.bold.redBright("time expire:"));
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);

        console.log(chalk.bold.yellowBright(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
    },1000)
}

countDown(myTimer.time)