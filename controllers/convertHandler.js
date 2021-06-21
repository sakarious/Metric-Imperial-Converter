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

    switch (unit) {
      case "Gal":
      case "gAl":
      case "gaL":
      case "gal":
      case "GAL":
      case "GaL":
      case "gAL":
        result = "gallon(s)";
        break;
      case "L":
      case "l":
        result = "liter(s)";
        break;
      case "Lbs":
      case "lBs":
      case "lbS":
      case "lbs":
      case "LBS":
      case "LbS":
      case "lBS":
        result = "pound(s)";
        break;
      case "kg":
      case "kG":
      case "Kg":
      case "KG":
        result = "kilogram(s)";
        break;
      case "mi":
      case "mI":
      case "Mi":
      case "MI":
        result = "Kmkilometer(s)";
        break;
      case "km":
      case "kM":
      case "Km":
      case "KM":
        result = "mile(s)";
        break;
      default:
        result = false;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;

    switch (initUnit) {
      case "Gal":
      case "gAl":
      case "gaL":
      case "gal":
      case "GAL":
      case "GaL":
      case "gAL":
        result = (initNum * galToL).toFixed(5);
        break;
      case "L":
      case "l":
        result = (initNum / galToL).toFixed(5);
        break;
      case "Lbs":
      case "lBs":
      case "lbS":
      case "lbs":
      case "LBS":
      case "LbS":
      case "lBS":
        result = (initNum * lbsToKg).toFixed(5);
        break;
      case "kg":
      case "kG":
      case "Kg":
      case "KG":
        result = (initNum / lbsToKg).toFixed(5);
        break;
      case "mi":
      case "mI":
      case "Mi":
      case "MI":
        result = (initNum * miToKm).toFixed(5);
        break;
      case "km":
      case "kM":
      case "Km":
      case "KM":
        result = (initNum / miToKm).toFixed(5);
        break;
      default:
        result = false;
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = ConvertHandler;
