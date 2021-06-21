function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    //Separate numbers from Unit
    let resultArray = input.match(/[a-z]+|[^a-z]+/gi);
    //Number comes before unit
    result = resultArray[0];

    return result;
  };

  this.getUnit = function (input) {
    let result;
    //Separate numbers from Unit
    let resultArray = input.match(/[a-z]+|[^a-z]+/gi);
    //Usually comes after number
    result = resultArray[1];

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit) {
      case "Gal":
      case "gAl":
      case "gaL":
      case "gal":
      case "GAL":
      case "GaL":
      case "gAL":
        result = "L";
        break;
      case "L":
      case "l":
        result = "gal";
        break;
      case "Lbs":
      case "lBs":
      case "lbS":
      case "lbs":
      case "LBS":
      case "LbS":
      case "lBS":
        result = "kg";
        break;
      case "kg":
      case "kG":
      case "Kg":
      case "KG":
        result = "lbs";
        break;
      case "mi":
      case "mI":
      case "Mi":
      case "MI":
        result = "Km";
        break;
      case "km":
      case "kM":
      case "Km":
      case "KM":
        result = "mi";
        break;
      default:
        result = false;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
