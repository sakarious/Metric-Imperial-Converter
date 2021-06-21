"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  //split_string = whole_string.split(/(\d+)/)
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    if (req.query.input) {
      let input = req.query.input;

      let initNum = convertHandler.getNum(input);

      let initUnit = convertHandler.getUnit(input);

      let returnNum = convertHandler.convert(initNum, initUnit);

      let returnUnit = convertHandler.getReturnUnit(initUnit);

      let toString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );

      if (initNum == "Invalid Number" && initUnit == "Invalid Unit") {
        return res.send("invalid number and unit");
      }

      if (initNum == "Invalid Number") {
        return res.send("invalid number");
      }

      if (initUnit == "Invalid Unit") {
        return res.send("invalid unit");
      }

      let response = {};
      response["initNum"] = initNum;
      response["initUnit"] = initUnit;
      response["returnNum"] = returnNum;
      response["returnUnit"] = returnUnit;
      response["string"] = toString;
      return res.json(response);
    }

    return res.send('"input" query parameter is required');
  });
};
