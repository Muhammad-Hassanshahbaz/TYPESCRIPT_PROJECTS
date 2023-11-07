"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var date_fns_1 = require("date-fns");
var inquirer_1 = require("inquirer");
var myTimer = await inquirer_1.default.prompt([
    {
        name: "time",
        type: "number",
        message: "Enter an amount in seconds:",
        validate: function (input) {
            if (isNaN(input)) {
                return "Enter valid number.";
            }
            else if (input > 60) {
                return "Value must be under 60.";
            }
            else {
                return true;
            }
        }
    }
]);
function countDown(time) {
    time += 2;
    var theTime = new Date().setSeconds(new Date().getSeconds() + time);
    var timeInterval = new Date(theTime);
    setInterval(function () {
        var current = new Date();
        var timeDifference = (0, date_fns_1.differenceInSeconds)(timeInterval, current);
        if (timeDifference <= 0) {
            console.log(chalk_1.default.bold.redBright("Time has expired:"));
            process.exit();
        }
        var min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        var sec = Math.floor(timeDifference % 60);
        console.log(chalk_1.default.bold.yellowBright("".concat(min.toString().padStart(2, "0"), ":").concat(sec.toString().padStart(2, "0"))));
    }, 1000);
}
countDown(myTimer.time);
