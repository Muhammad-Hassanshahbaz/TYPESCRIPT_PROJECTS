import inquirer from "inquirer";
import chalk from "chalk";

let convertor_link = "https://v6.exchangerate-api.com/v6/e42eeee3e0288ebca11733c8/latest/PKR";

let fetchData =async (data:any) => {
    let myData = await fetch(data);
    let response = await myData.json();
    return response.conversion_rates;
};

let receive = await fetchData(convertor_link);

let countries = Object.keys(receive);

let first = await inquirer.prompt({
    name: "country",
    type: "list",
    message: "Select the first country:",
    choices: countries
});

let amount = await inquirer.prompt({
    name: "total",
    type: "number",
    message: "Enter the amount to exchange: "
});

let second = await inquirer.prompt({
    name: "country",
    type: "list",
    message: "Select the second country:",
    choices: countries
});

let custom_link = `https://v6.exchangerate-api.com/v6/e42eeee3e0288ebca11733c8/pair/${first.country}/${second.country}`;

let fetchConversionRate =async (data:any) => {
    let myData = await fetch(data);
    let response = await myData.json();
    return response.conversion_rate;
};

let conversion_rate = await fetchConversionRate(custom_link);

let conversion_money = amount.total * conversion_rate;

let finalAmount = conversion_money.toFixed(2);

console.log(`Your ${amount.total} in ${first.country} currency is worth about ${finalAmount} in ${second.country} currency.`);
