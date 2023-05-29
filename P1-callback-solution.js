console.log("Before");

getUser(1012, (user) => {
  console.log("Github User:", user);

  getRepos(user.gitUser, (repos) => {
    console.log("Repos:", repos);
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading ID from Database...");
    callback({ id: id, gitUser: "codewithz" });
  }, 2000);
}

function getRepos(userid, callback) {
  setTimeout(() => {
    console.log("Calling Github API for username:", userid);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
