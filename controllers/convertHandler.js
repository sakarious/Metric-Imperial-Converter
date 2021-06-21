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

    if (initUnit == "gal" || initUnit == "GAL") {
      result = "l";
    } else if (initUnit == "l" || initUnit == "L") {
      result = "gal";
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
