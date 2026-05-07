// ======================================================
// All Types of Functions in TypeScript
// ======================================================


// ------------------------------------------------------
// 1. Normal Function
// ------------------------------------------------------

function add(a: number, b: number): number {

    return a + b;
}

console.log("Addition =", add(10, 5));


// ------------------------------------------------------
// 2. Anonymous Function
// ------------------------------------------------------

let multiply = function(a: number, b: number): number {

    return a * b;
}

console.log("Multiplication =", multiply(4, 5));


// ------------------------------------------------------
// 3. Arrow Function
// ------------------------------------------------------

let subtract = (a: number, b: number): number => {

    return a - b;
}

console.log("Subtraction =", subtract(20, 8));


// ------------------------------------------------------
// 4. Function with Optional Parameter
// ------------------------------------------------------

function student(name: string, age?: number): void {

    console.log("Name:", name);
    console.log("Age:", age);
}

student("Manav", 20);
student("Rahul");


// ------------------------------------------------------
// 5. Function with Default Parameter
// ------------------------------------------------------

function welcome(name: string = "Guest"): void {

    console.log("Welcome", name);
}

welcome("Manav");
welcome();


// ------------------------------------------------------
// 6. Rest Parameter Function
// ------------------------------------------------------

function total(...numbers: number[]): void {

    let sum = 0;

    for(let n of numbers) {

        sum = sum + n;
    }

    console.log("Total =", sum);
}

total(10, 20, 30);
total(5, 5, 5, 5);


// ------------------------------------------------------
// 7. Recursive Function
// ------------------------------------------------------

function factorial(n: number): number {

    if(n == 0 || n == 1) {

        return 1;
    }

    return n * factorial(n - 1);
}

console.log("Factorial =", factorial(5));


// ------------------------------------------------------
// 8. Function Returning Void
// ------------------------------------------------------

function message(): void {

    console.log("This is void function");
}

message();