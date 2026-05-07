// ======================================================
// Interface in TypeScript
// ======================================================

// Creating Interface
interface Student {

    id: number;
    name: string;
    course: string;

    display(): void;
}


// Implementing Interface in Class
class CollegeStudent implements Student {

    id: number;
    name: string;
    course: string;

    constructor(id: number, name: string, course: string) {

        this.id = id;
        this.name = name;
        this.course = course;
    }

    display(): void {

        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Course:", this.course);
    }
}


// Main Program
console.log("----- Interface Example -----");

let s1 = new CollegeStudent(1, "Manav", "Computer Engineering");

s1.display();