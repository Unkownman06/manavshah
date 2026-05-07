// Simple Calculator using Switch Case in TypeScript

let num1: number = 20;
let num2: number = 10;
let operator: string = "+";

switch(operator) {

    case "+":
        console.log("Addition =", num1 + num2);
        break;

    case "-":
        console.log("Subtraction =", num1 - num2);
        break;

    case "*":
        console.log("Multiplication =", num1 * num2);
        break;

    case "/":
        if(num2 == 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Division =", num1 / num2);
        }
        break;

    case "%":
        console.log("Modulus =", num1 % num2);
        break;

    default:
        console.log("Invalid Operator");
}