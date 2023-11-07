import inquirer from "inquirer";
import chalk from "chalk";

let ID:number = 10000;

class Student {
    studentId:number;
    name:string;
    balance:number;
    enrolled:number;
    courses:string[];

    constructor(theName:string, assignedFee:number, year:number, theCourses:string[])
    {
        this.studentId = ID;
        ID += 1;
        this.name = theName;
        this.balance = assignedFee;
        this.enrolled = year;
        this.courses = theCourses;
    }

    getBalance():number
    {
        return this.balance;
    }

    payTutionFee(myFee:number):void
    {
        if(this.balance > myFee)
        {
            this.balance -= myFee;
            console.log(`Your remaining fees is: ${this.balance}.`);
        }
        else if(this.balance < myFee)
        {
            myFee -= this.balance;
            this.balance = 0;
            console.log(`Here is your extra amount of ${myFee}.`);
        }
        else
        {
            this.balance = 0;
            console.log("Complete fee paid.");
        }
    }

    showStatus():void
    {
        console.log(`StudentID: ${this.studentId}\nName: ${this.name}\nCourses: ${this.courses}\nEnrolled: Year enrolled ${this.enrolled}\nBalance: ${this.balance}`);
    }

}


async function startMySchool()
{
    let response:boolean = true;
    let theCourses:string[] = [];
    let studentsName:string[] = [];
    let allStudents:Student[] = [];

    do{
        let studentDetails = await inquirer.prompt([
            {
                name: "theName",
                type: "input",
                message: "Enter student's name:"   
            },
            {
                name: "theFee",
                type:"number",
                message: "Enter the fee:"
            },
            {
                name: "year",
                type: "number",
                message: "Enter the enrollment year:",
            },
            {
                name: "noCourse",
                type: "number",
                message: "Enter the total courses enrolled in:"
            }
        ])

        studentsName.push(studentDetails.theName);

        for(let i = 0; i < studentDetails.noCourse; i++)
        {
            let remain = await inquirer.prompt([
                {
                    name: "theCourse",
                    type: "input",
                    message: "Enter the course name:"
                }
            ]);

            theCourses.push(remain.theCourse)
        }

        let cont = await inquirer.prompt([
            {
                name: "response",
                type: "list",
                message: "Are there more students details?",
                choices: ["Yes", "No"]
            }
        ])

        if (cont.response == "No")
        {
            response = false;
        }

        allStudents.push(new Student(studentDetails.theName, studentDetails.theFee, studentDetails.year, theCourses));

    }while(response);

    let operation = await inquirer.prompt([
        {
            name: "opt",
            type: "list",
            message: "What would you like to perform:",
            choices: ["ViewBalance", "PayFee", "ShowDetails"]
        },
        {
            name: "studentName",
            type: "list",
            message: "Select the student",
            choices: studentsName
        }
    ]);

    let index: number = -1;

    for(let i = 0; i < allStudents.length; i++)
    {
        if(allStudents[i].name == operation.studentName)
        {
            index = i;
        }
    }

    if(operation.opt == "ViewBalance")
    {
        allStudents[index].getBalance();
    }
    else if(operation.opt == "PayFee")
    {
        let fee = await inquirer.prompt([
            {
                name: "myFee",
                type: "number",
                message: "Enter the amount of fees:"
            }
        ]);

        allStudents[index].payTutionFee(fee.myFee);
    }
    else
    {
        allStudents[index].showStatus();
    }
}


startMySchool()