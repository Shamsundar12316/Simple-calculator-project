// simple calcuator project

import inquirer from "inquirer";

// asking Question from users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstnumber"},
    {message: "Enter Second Number", type: "number", name: "Secondnumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition","Subtractions","Multiplication","Division"],
    },
]);
// conditional statements IF-Else

if(answers.operator === "Addition"){
    console.log(answers.firstnumber + answers.Secondnumber)

}
else if(answers.operator === "Subtractions"){
    console.log(answers.firstnumber - answers.Secondnumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.Secondnumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstnumber / answers.Secondnumber)
}
else{
    console.log("Invalid Input")
}

