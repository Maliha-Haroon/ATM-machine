import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 500000;
let myPin = 12345;
//print welcome message
console.log("welcome to M.H -ATM Machine");
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    }
]);
if (PinAnswer.pin === myPin) {
    console.log("You have entered the correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount you wish to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Withdrawal Successful!");
            console.log(`Current Account Balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Account Balance is ${myBalance}`);
    }
}
else {
    console.log("You have entered the incorrect pin code!");
}
