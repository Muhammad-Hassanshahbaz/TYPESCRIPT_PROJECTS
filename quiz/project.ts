import inquirer from "inquirer";
import chalk from "chalk";

class Student{
    name:string;
    totalScore:number = 0;
    institute:string;

    constructor (theName:string, theInstitute:string)
    {
        this.name = theName;
        this.institute = theInstitute;
    }

    increment()
    {
        this.totalScore += 1;
    }

    decrement()
    {
        if(this.totalScore != 0)
        {
            this.totalScore -= 1;
        }
    }

    finalResult()
    {
        console.log(chalk.bold.blueBright(`Your total obtained marks are ${this.totalScore}.`));
    }
}

class Quiz{
    question:string;
    option:string[];
    answer:string;

    constructor (theQuestion:string,theOptions:string[] ,theAnswer:string)
    {
        this.question = theQuestion;
        this.option = theOptions;
        this.answer = theAnswer;
    }

    checkAnswer (attempt:string):boolean
    {
        if (attempt == this.answer)
        {
            console.log(chalk.blueBright("Correct answer:"));
            return true;
        }
        console.log(`Incorrect the correct option is: ${chalk.redBright(`${this.answer}`)}`);
        return false;
    }
}

let allQuestions = [];

let quiz1 = new Quiz("What is TypeScript primarily used for?", ["Writing server-side code", "Writing client-side code for browsers", "Developing mobile applications", "Creating 3D games"], "Writing client-side code for browsers");
let quiz2 = new Quiz("Which keyword is used to declare a variable with a specific type in TypeScript?", ["var", "let", "const", "type"], "type");
let quiz3 = new Quiz("What does 'TypeScript is a statically typed language' mean?", ["TypeScript variables can only be of type number or string.", "TypeScript requires explicit type annotations for all variables.", "TypeScript performs type checking at compile-time, catching type-related errors before runtime.", "TypeScript variables can change their type at runtime."], "TypeScript performs type checking at compile-time, catching type-related errors before runtime.");
let quiz4 = new Quiz("In TypeScript, what is the purpose of the 'interface' keyword?", ["To define a class with properties and methods", "To define a contract for the structure of an object", "To declare a loop variable in a for loop", "To create a new instance of a class"], "To define a contract for the structure of an object");
let quiz5 = new Quiz("Which of the following is NOT a valid TypeScript data type?", ["number", "boolean", "string", "tuple"], "tuple");

allQuestions.push(quiz1, quiz2, quiz3, quiz4, quiz5);

let quizTaker = await inquirer.prompt([
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
])

let s1:Student = new Student(quizTaker.studentName, quizTaker.instituteName);

console.log(chalk.bgRedBright.yellowBright("Your Quiz Starts Now !!!"));

for(let i = 0; i < allQuestions.length; i++)
{
    console.log(chalk.yellowBright(`Question ${i + 1}:`));
    console.log(allQuestions[i].question);

    let answer = await inquirer.prompt([
        {
            name: "myAnswer",
            type: "list",
            message: "Choose the right option:",
            choices: allQuestions[i].option
        }
    ]);

    if(allQuestions[i].checkAnswer(answer.myAnswer))
    {
        s1.increment;
    }
    else
    {
        s1.decrement;
    }
}

s1.finalResult()