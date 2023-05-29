numbers = [1, 2, 3, 4, 5, 6];

function filterEven(number) {
  return number % 2 == 0;
}

const evenNumbers = numbers.filter(filterEven);

console.log("Original:", numbers);
console.log("Filtered:", evenNumbers);
console.log("------------------------------------------------");
const evenNumbersAF = numbers.filter((number) => number % 2 == 0);

console.log("Original:", numbers);
console.log("Filtered:", evenNumbersAF);

const jobs = [
  { id: 1, position: "Developer", isActive: true },
  { id: 2, position: "Tester", isActive: true },
  { id: 3, position: "Devops", isActive: false },
  { id: 4, position: "Manager", isActive: true },
];

function getActiveJob(job) {
  return job.isActive;
}

const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);
