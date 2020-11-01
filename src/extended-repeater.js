const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator || "+";
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator || "|";


  // if only separator given
  str+= separator;
  let repeatedStr = str.repeat(repeatTimes);
  repeatedStr = repeatedStr.slice(0, repeatedStr[repeatedStr.length - separator.length]);
  

  // 


};
  