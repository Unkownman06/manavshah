"use strict";
// ======================================================
// All Types of Inheritance in TypeScript
// ======================================================
// -----------------------------
// 1. Single Inheritance
// -----------------------------
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    bark() {
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
    speak() {
        console.log("Person speaks");
    }
}
class Student extends Person {
    study() {
        console.log("Student studies");
    }
}
class Monitor extends Student {
    manage() {
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
    draw() {
        console.log("Drawing Shape");
    }
}
class Circle extends Shape {
    area() {
        console.log("Area of Circle");
    }
}
class Square extends Shape {
    perimeter() {
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
class Child {
    fatherProperty() {
        console.log("Father Property");
    }
    motherProperty() {
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
    displayA() {
        console.log("Class A");
    }
}
class C extends A {
    displayB() {
        console.log("Interface B");
    }
}
console.log("\n----- Hybrid Inheritance -----");
let obj = new C();
obj.displayA();
obj.displayB();
