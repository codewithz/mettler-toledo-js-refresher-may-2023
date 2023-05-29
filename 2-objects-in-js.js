const person = {
  name: "Zartab Nakhwa",
  age: 32,
  blog: "www.codewithz.com",
  walk() {
    console.log("Walking");
  },
};

console.log(person.name);
person.walk();

person.city = "Mumbai";

console.log(person);

person["qualification"] = "Masters in Information Technology";

console.log(person);

let targetMember = "car";
let targetValue = "Nissan Sunny";

person[targetMember] = targetValue;
console.log(person);

person.targetMember = targetValue;

console.log(person);
