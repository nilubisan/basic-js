const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693/HALF_LIFE_PERIOD;
  
  if(typeof sampleActivity !== 'string') return false;
  
  sampleActivity = parseFloat(sampleActivity);

  if((!arguments) || isNaN(sampleActivity) ||  sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)  return false;

  let result = Math.log(MODERN_ACTIVITY/sampleActivity)/(k);
  
  return  Math.ceil(result);
};
