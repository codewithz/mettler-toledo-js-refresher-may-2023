const colors = ["green", "red", "blue"];

function convertToLi(color) {
  return `<li>${color}</li>`;
}

const mappedColors = colors.map(convertToLi);

console.log("O:", colors);
console.log("M:", mappedColors);

const mappedColorsAF = colors.map((color) => `<li>${color}</li>`);
console.log("M-AF:", mappedColors);
