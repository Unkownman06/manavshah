// ======================================================
// Access Modifiers in TypeScript
// ======================================================

// public, private, protected

class Employee {

    // Public variable
    public name: string;

    // Private variable
    private salary: number;

    // Protected variable
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    // Public method
    public display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }

    // Private method
    private privateMethod(): void {
        console.log("This is a private method");
    }

    // Public function calling private method
    public callPrivateMethod(): void {
        this.privateMethod();
    }
}


// Child class
class Manager extends Employee {

    showDepartment(): void {

        // protected member accessible in child class
        console.log("Department:", this.department);

        // public member accessible
        console.log("Manager Name:", this.name);

        // private member NOT accessible
        // console.log(this.salary); // Error
    }
}


// ---------------- Main Program ----------------

console.log("----- Access Modifiers Example -----");

let emp = new Employee("Manav", 50000, "IT");

// Public member accessible
console.log(emp.name);

// Public method accessible
emp.display();

// Calling private method indirectly
emp.callPrivateMethod();


// Child class object
let mgr = new Manager("Rahul", 80000, "HR");

mgr.showDepartment();


// Private member NOT accessible outside class
// console.log(emp.salary); // Error

// Protected member NOT accessible outside class
// console.log(emp.department); // Error