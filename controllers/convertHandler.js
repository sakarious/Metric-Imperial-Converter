function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    //Separate numbers from Unit
    let resultArray = input.match(/[a-z]+|[^a-z]+/gi);
    //Number comes before unit
    result = resultArray[0];

    //check if a value is given, if not, default to 1
    if (/\d/.test(result) === false) {
      return (result = 1);
    }

    if (result.toString().includes("/")) {
      let fraction = result.toString().split("/");
      if (fraction.length !== 2) {
        return (result = "Invalid Number");
      }
      value1 = parseFloat(fraction[0]);
      value2 = parseFloat(fraction[1]);
      result = parseFloat(value1 / value2).toFixed(5);
    }

    if (isNaN(result)) {
      result = "Invalid Number";
    }

    return parseFloat(result);
  };

  this.getUnit = function (input) {
    let result;
    //Separate numbers from Unit
    let resultArray = input.match(/[a-z]+|[^a-z]+/gi);
    //Usually comes after number
    result = resultArray[1];
    if (result) {
      if (result == "l" || result == "L") {
        result = "L";
      } else {
        result = result.toLowerCase();
      }
    }

    if (!result) {
      result = resultArray[0];
      if (result == "l" || result == "L") {
        result = "L";
      } else {
        result = result.toLowerCase();
      }
    }

    let unitArray = ["L", "gal", "lbs", "kg", "km", "mi"];
    if (unitArray.indexOf(result) === -1) {
      result = "Invalid Unit";
    }

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
        result = "km";
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
        result = "gallons";
        break;
      case "L":
      case "l":
        result = "liters";
        break;
      case "Lbs":
      case "lBs":
      case "lbS":
      case "lbs":
      case "LBS":
      case "LbS":
      case "lBS":
        result = "pounds";
        break;
      case "kg":
      case "kG":
      case "Kg":
      case "KG":
        result = "kilograms";
        break;
      case "mi":
      case "mI":
      case "Mi":
      case "MI":
        result = "miles";
        break;
      case "km":
      case "kM":
      case "Km":
      case "KM":
        result = "kilometers";
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
        result = parseFloat((initNum * galToL).toFixed(5));
        break;
      case "L":
      case "l":
        result = parseFloat((initNum / galToL).toFixed(5));
        break;
      case "Lbs":
      case "lBs":
      case "lbS":
      case "lbs":
      case "LBS":
      case "LbS":
      case "lBS":
        result = parseFloat((initNum * lbsToKg).toFixed(5));
        break;
      case "kg":
      case "kG":
      case "Kg":
      case "KG":
        result = parseFloat((initNum / lbsToKg).toFixed(5));
        break;
      case "mi":
      case "mI":
      case "Mi":
      case "MI":
        result = parseFloat((initNum * miToKm).toFixed(5));
        break;
      case "km":
      case "kM":
      case "Km":
      case "KM":
        result = parseFloat((initNum / miToKm).toFixed(5));
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
