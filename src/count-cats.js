const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.flat().forEach(x => {
    if(x == '^^') count++;
  });
  return count;
};
