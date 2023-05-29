const country = "IN";

const address = {
  city: "Coimbatore",
  state: "Tamil Nadu",
  pincode: 641012,
  country: "India",
};
// Traditional Approach
// const city=address.city;
// const country=address.country;
// const pincode=address.pincode;

// ES6 Approach
const { city, pincode, country: ct } = address;
console.log(city);
console.log(pincode);
console.log(country);
console.log(ct);

const { state } = address;
console.log("----------------------------------");
function test(address) {
  console.log(address.city);
  console.log(address.country);
}

test(address);

console.log("----------------------------------");
function test1({ city, country }) {
  console.log(city);
  console.log(country);
}

test1(address);
