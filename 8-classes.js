// objects, functions, variables -- camelCasing
// Class -- PascalCasing

// camelCasing --> oneTwoThreeFour
// PascalCasing --> OneTwoThreeFour

class Person {
  constructor(x) {
    this.name = x;
    console.log("Name is :", this.name);
  }
  walk() {
    console.log(this.name + " is walking");
  }
}

const p1 = new Person("Zartab");
p1.walk();

let p2 = new Person("Tom");
p2.walk();
p2.name = "Alex";
p2.walk();
p2 = new Person("John");
