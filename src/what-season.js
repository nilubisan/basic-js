const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dateArg) {
  const seasons = [[11,0,1],[2,3,4],[5,6,7],[8,9,10]];
  let month;
  let season;
  if(!arguments || arguments.length == 0) return "Unable to determine the time of year!";
  if (!dateArg instanceof Date) throw new Error();

  try {
    dateArg.getTime();
  } catch(e) {
    if(e instanceof Error) {
      throw new Error();
    }
  }

  seasons.forEach((element,index) => {
    if(element.indexOf(dateArg.getMonth()) !== -1) month = index; 
  });

  switch(month) {
    case 0:
      season = "winter";
      break;

    case 1:
      season = "spring";
      break;

    case 2: 
      season = "summer";
      break;

    case 3:
      season = "autumn";
      break;
  };

  return season;

};
