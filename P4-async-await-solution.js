//------- Call back Approach-----------

// console.log("Before");

// getUser(1012, (user) => {
//   console.log("Github User:", user);

//   getRepos(user.gitUser, (repos) => {
//     console.log("Repos:", repos);
//   });
// });
// console.log("After");

// -------- Promise Approach-----------

// const promise = getUser(1012);

// promise
//   .then((user) => {
//     console.log("Value returned from first promise", user);
//     return getRepos(user.gitUser);
//   })
//   .then((repos) => console.log(repos))
//   .catch((error) => console.log(error));

// ----------- Async Await Approach---------------
async function displayRepos() {
  try {
    const user = await getUser(1012);
    console.log(user);
    const repos = await getRepos(user.gitUser);
    console.log(repos);
  } catch (error) {
    console.log(error);
  }
  console.log("---- Execution is still On--------");
}

displayRepos();

// -------------------------------------------------------------------------
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading ID from Database...");
      resolve({ id: id, gitUser: "codewithz" });
    }, 2000);
  });
}

function getRepos(userid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API for username:", userid);
      //   resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("Connection Failed"));
    }, 2000);
  });
}
