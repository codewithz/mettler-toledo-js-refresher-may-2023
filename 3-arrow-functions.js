function sayHello() {
  console.log("Hello");
}

sayHello();

let v1 = () => {
  console.log("Hello");
};

v1();

function square(number) {
  return number * number;
}

let sqaureMe = (number) => {
  return number * number;
};

console.log(sqaureMe(4));

// Single Parameter -- get rid of ()

// number => {
//   return number * number;
// };

let square2 = (number) => {
  return number * number;
};

console.log(square2(5));

// if the function have a single statement
//  we can get rid of   {} also the return statement
//  if it is a variable , it will be returned
// if it is an executable statement, it will be executed

let square3 = (number) => number * number;

//Single statement
// no {} --> return statement is not required
// // if {} --> return is compulsory
// let square4 = (number) => {
//   number * number;
// };

function addMe(a, b, c) {
  return a + b + c;
}

let x = (a, b, c) => a + b + c;

function calculation(x, y, z) {
  const a = x + y + z;
  const b = a - 10;
  return a + b;
}

let x2 = (x, y, z) => {
  const a = x + y + z;
  const b = a - 10;
  return a + b;
};
