const p = new Promise((resolve, reject) => {
  //Kick off some async task
  setTimeout(() => {
    // if the task is successful --> resolve()
    // resolve(1)
    // resolve("Success")
    // resolve({ status: "Success" });

    // if the task is unsuccessful --> reject()

    reject(new Error("Some Error Occurred"));
  }, 3000);
});

p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
