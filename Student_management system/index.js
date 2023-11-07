"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var ID = 10000;
var Student = /** @class */ (function () {
    function Student(theName, assignedFee, year, theCourses) {
        this.studentId = ID;
        ID += 1;
        this.name = theName;
        this.balance = assignedFee;
        this.enrolled = year;
        this.courses = theCourses;
    }
    Student.prototype.getBalance = function () {
        return this.balance;
    };
    Student.prototype.payTutionFee = function (myFee) {
        if (this.balance > myFee) {
            this.balance -= myFee;
            console.log("Your remaining fees is: ".concat(this.balance, "."));
        }
        else if (this.balance < myFee) {
            myFee -= this.balance;
            this.balance = 0;
            console.log("Here is your extra amount of ".concat(myFee, "."));
        }
        else {
            this.balance = 0;
            console.log("Complete fee paid.");
        }
    };
    Student.prototype.showStatus = function () {
        console.log("StudentID: ".concat(this.studentId, "\nName: ").concat(this.name, "\nCourses: ").concat(this.courses, "\nEnrolled: Year enrolled ").concat(this.enrolled, "\nBalance: ").concat(this.balance));
    };
    return Student;
}());
function startMySchool() {
    return __awaiter(this, void 0, void 0, function () {
        var response, theCourses, studentsName, allStudents, studentDetails, i, remain, cont, operation, index, i, fee;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    response = true;
                    theCourses = [];
                    studentsName = [];
                    allStudents = [];
                    _a.label = 1;
                case 1: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "theName",
                            type: "input",
                            message: "Enter student's name:"
                        },
                        {
                            name: "theFee",
                            type: "number",
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
                    ])];
                case 2:
                    studentDetails = _a.sent();
                    studentsName.push(studentDetails.theName);
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < studentDetails.noCourse)) return [3 /*break*/, 6];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "theCourse",
                                type: "input",
                                message: "Enter the course name:"
                            }
                        ])];
                case 4:
                    remain = _a.sent();
                    theCourses.push(remain.theCourse);
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "response",
                            type: "list",
                            message: "Are there more students details?",
                            choices: ["Yes", "No"]
                        }
                    ])];
                case 7:
                    cont = _a.sent();
                    if (cont.response == "No") {
                        response = false;
                    }
                    allStudents.push(new Student(studentDetails.theName, studentDetails.theFee, studentDetails.year, theCourses));
                    _a.label = 8;
                case 8:
                    if (response) return [3 /*break*/, 1];
                    _a.label = 9;
                case 9: return [4 /*yield*/, inquirer_1.default.prompt([
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
                    ])];
                case 10:
                    operation = _a.sent();
                    index = -1;
                    for (i = 0; i < allStudents.length; i++) {
                        if (allStudents[i].name == operation.studentName) {
                            index = i;
                        }
                    }
                    if (!(operation.opt == "ViewBalance")) return [3 /*break*/, 11];
                    allStudents[index].getBalance();
                    return [3 /*break*/, 14];
                case 11:
                    if (!(operation.opt == "PayFee")) return [3 /*break*/, 13];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "myFee",
                                type: "number",
                                message: "Enter the amount of fees:"
                            }
                        ])];
                case 12:
                    fee = _a.sent();
                    allStudents[index].payTutionFee(fee.myFee);
                    return [3 /*break*/, 14];
                case 13:
                    allStudents[index].showStatus();
                    _a.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    });
}
startMySchool();
