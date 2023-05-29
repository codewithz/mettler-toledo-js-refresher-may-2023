function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log("Inside the loop :", i);
  }

  console.log("Outside For Loop :", i);
}

sayHello();

// -------------- let / const ---------------------
//  --------- let is mutable / const is immutable
console.log("-----------------------------------------------------");
function sayHi() {
  for (let i = 0; i < 5; i++) {
    console.log("Inside the loop :", i);
  }

  // console.log("Outside For Loop :", i);
  // ReferenceError: i is not defined
}

sayHi();

const someValue = "Hello";
// TypeError: Assignment to constant variable.
// someValue = "Hi";

let name = "Test";
console.log(name);
name = "Test Me";
console.log(name);

// --------- let vs const vs var ReDeclaration---------

var v1 = "A";
console.log(v1);
var v1 = "B";
console.log(v1);

let l1 = "A";
console.log(l1);
// let l1 = "B";
// console.log(l1);
