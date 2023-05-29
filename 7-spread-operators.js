const first = [1, 2, 3];
const second = [4, 5, 6];
// 1,2,3,a,4,5,6,b
const combinedTr = first.concat("a").concat(second).concat("b");
console.log(combinedTr);

const combined = [...first, "a", ...second, "b"];
console.log(combined);

const cloneFirst = [...first];
console.log(cloneFirst);
// -----------------------------------------

const grades = ["C", "A", "B", "D"];
console.log("Before Sorting", grades);
const sortedGrades = [...grades].sort();
console.log("After Sorting", sortedGrades);
console.log("After Sorting Original", grades);
