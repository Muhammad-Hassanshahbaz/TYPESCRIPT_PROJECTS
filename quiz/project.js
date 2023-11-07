"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var Student = /** @class */ (function () {
    function Student(theName, theInstitute) {
        this.totalScore = 0;
        this.name = theName;
        this.institute = theInstitute;
    }
    Student.prototype.increment = function () {
        this.totalScore += 1;
    };
    Student.prototype.decrement = function () {
        if (this.totalScore != 0) {
            this.totalScore -= 1;
        }
    };
    Student.prototype.finalResult = function () {
        console.log(chalk_1.default.bold.blueBright("Your total obtained marks are ".concat(this.totalScore, ".")));
    };
    return Student;
}());
var Quiz = /** @class */ (function () {
    function Quiz(theQuestion, theOptions, theAnswer) {
        this.question = theQuestion;
        this.option = theOptions;
        this.answer = theAnswer;
    }
    Quiz.prototype.checkAnswer = function (attempt) {
        if (attempt == this.answer) {
            console.log(chalk_1.default.blueBright("Correct answer:"));
            return true;
        }
        console.log("Incorrect the correct option is: ".concat(chalk_1.default.redBright("".concat(this.answer))));
        return false;
    };
    return Quiz;
}());
var allQuestions = [];
var quiz1 = new Quiz("What is TypeScript primarily used for?", ["Writing server-side code", "Writing client-side code for browsers", "Developing mobile applications", "Creating 3D games"], "Writing client-side code for browsers");
var quiz2 = new Quiz("Which keyword is used to declare a variable with a specific type in TypeScript?", ["var", "let", "const", "type"], "type");
var quiz3 = new Quiz("What does 'TypeScript is a statically typed language' mean?", ["TypeScript variables can only be of type number or string.", "TypeScript requires explicit type annotations for all variables.", "TypeScript performs type checking at compile-time, catching type-related errors before runtime.", "TypeScript variables can change their type at runtime."], "TypeScript performs type checking at compile-time, catching type-related errors before runtime.");
var quiz4 = new Quiz("In TypeScript, what is the purpose of the 'interface' keyword?", ["To define a class with properties and methods", "To define a contract for the structure of an object", "To declare a loop variable in a for loop", "To create a new instance of a class"], "To define a contract for the structure of an object");
var quiz5 = new Quiz("Which of the following is NOT a valid TypeScript data type?", ["number", "boolean", "string", "tuple"], "tuple");
allQuestions.push(quiz1, quiz2, quiz3, quiz4, quiz5);
var quizTaker = await inquirer_1.default.prompt([
    {
        name: "studentName",
        type: "input",
        message: "Enter your name:"
    },
    {
        name: "instituteName",
        type: "input",
        message: "Enter your institute name:"
    }
]);
var s1 = new Student(quizTaker.studentName, quizTaker.instituteName);
console.log(chalk_1.default.bgRedBright.yellowBright("Your Quiz Starts Now !!!"));
for (var i = 0; i < allQuestions.length; i++) {
    console.log(chalk_1.default.yellowBright("Question ".concat(i + 1, ":")));
    console.log(allQuestions[i].question);
    var answer = await inquirer_1.default.prompt([
        {
            name: "myAnswer",
            type: "list",
            message: "Choose the right option:",
            choices: allQuestions[i].option
        }
    ]);
    if (allQuestions[i].checkAnswer(answer.myAnswer)) {
        s1.increment;
    }
    else {
        s1.decrement;
    }
}
s1.finalResult();
