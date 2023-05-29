console.log("Before");
const user = getUser(1012);
console.log(user);
console.log("After");



function getUser(id) {
  setTimeout(() => {
    console.log("Reading ID from Database...");
    return { id: id, gitUser: "codewithz" };
  }, 2000);
}


//Callback
// Promise
// Async Await