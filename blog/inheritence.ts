// ======================================================
// All Types of Inheritance in TypeScript
// ======================================================

// -----------------------------
// 1. Single Inheritance
// -----------------------------

class Animal {
    eat(): void {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Dog is barking");
    }
}

console.log("----- Single Inheritance -----");

let d = new Dog();

d.eat();
d.bark();


// -----------------------------
// 2. Multilevel Inheritance
// -----------------------------

class Person {
    speak(): void {
        console.log("Person speaks");
    }
}

class Student extends Person {
    study(): void {
        console.log("Student studies");
    }
}

class Monitor extends Student {
    manage(): void {
        console.log("Monitor manages class");
    }
}

console.log("\n----- Multilevel Inheritance -----");

let m = new Monitor();

m.speak();
m.study();
m.manage();


// -----------------------------
// 3. Hierarchical Inheritance
// -----------------------------

class Shape {
    draw(): void {
        console.log("Drawing Shape");
    }
}

class Circle extends Shape {
    area(): void {
        console.log("Area of Circle");
    }
}

class Square extends Shape {
    perimeter(): void {
        console.log("Perimeter of Square");
    }
}

console.log("\n----- Hierarchical Inheritance -----");

let c = new Circle();

c.draw();
c.area();

let s = new Square();

s.draw();
s.perimeter();


// -----------------------------
// 4. Multiple Inheritance
// (Using Interfaces)
// -----------------------------

interface Father {
    fatherProperty(): void;
}

interface Mother {
    motherProperty(): void;
}

class Child implements Father, Mother {

    fatherProperty(): void {
        console.log("Father Property");
    }

    motherProperty(): void {
        console.log("Mother Property");
    }
}

console.log("\n----- Multiple Inheritance -----");

let child = new Child();

child.fatherProperty();
child.motherProperty();


// -----------------------------
// 5. Hybrid Inheritance
// -----------------------------

class A {
    displayA(): void {
        console.log("Class A");
    }
}

interface B {
    displayB(): void;
}

class C extends A implements B {

    displayB(): void {
        console.log("Interface B");
    }
}

console.log("\n----- Hybrid Inheritance -----");

let obj = new C();

obj.displayA();
obj.displayB();