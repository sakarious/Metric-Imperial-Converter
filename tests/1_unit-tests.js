const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("Get Num", (done) => {
    let input1 = "4L";
    let input2 = "456L";
    let input3 = "4.76L";
    assert.equal(convertHandler.getNum(input1), 4);
    assert.equal(convertHandler.getNum(input2), 456);
    assert.equal(convertHandler.getNum(input3), 4.76);
    done();
  });

  test("Get Unit", (done) => {
    let input1 = "4L";
    let input2 = "456KG";
    let input3 = "4.76Mi";
    let input4 = "4.76KM";
    let input5 = "4.76Gal";
    let input6 = "4.76lbs";
    assert.equal(convertHandler.getUnit(input1), "L");
    assert.equal(convertHandler.getUnit(input2), "kg");
    assert.equal(convertHandler.getUnit(input3), "mi");
    assert.equal(convertHandler.getUnit(input4), "km");
    assert.equal(convertHandler.getUnit(input5), "gal");
    assert.equal(convertHandler.getUnit(input6), "lbs");
    done();
  });

  test("Get Return Unit", (done) => {
    let input1 = "L";
    let input2 = "KG";
    let input3 = "MI";
    let input4 = "KM";
    let input5 = "Gal";
    let input6 = "LBS";
    assert.equal(convertHandler.getReturnUnit(input1), "gal");
    assert.equal(convertHandler.getReturnUnit(input2), "lbs");
    assert.equal(convertHandler.getReturnUnit(input3), "km");
    assert.equal(convertHandler.getReturnUnit(input4), "mi");
    assert.equal(convertHandler.getReturnUnit(input5), "L");
    assert.equal(convertHandler.getReturnUnit(input6), "kg");
    done();
  });

  test("Spell out Unit", (done) => {
    let input1 = "L";
    let input2 = "Gal";
    let input3 = "MI";
    let input4 = "KM";
    let input5 = "KG";
    let input6 = "LBS";
    assert.equal(convertHandler.spellOutUnit(input1), "liter(s)");
    assert.equal(convertHandler.spellOutUnit(input2), "gallon(s)");
    assert.equal(convertHandler.spellOutUnit(input3), "mile(s)");
    assert.equal(convertHandler.spellOutUnit(input4), "kilometer(s)");
    assert.equal(convertHandler.spellOutUnit(input5), "kilogram(s)");
    assert.equal(convertHandler.spellOutUnit(input6), "pound(s)");
    done();
  });

  test("Convert 'gal' to 'l'", (done) => {
    let initNum = "4.76";
    let initUnit = "gal";
    assert.equal(convertHandler.convert(initNum, initUnit), 18.01855);
    done();
  });

  test("Convert 'l' to 'gal'", (done) => {
    let initNum = "4.76";
    let initUnit = "l";
    assert.equal(convertHandler.convert(initNum, initUnit), 1.25746);
    done();
  });

  test("Convert 'lbs' to 'kg'", (done) => {
    let initNum = "4";
    let initUnit = "lbs";
    assert.equal(convertHandler.convert(initNum, initUnit), 1.81437);
    done();
  });

  test("Convert 'kg' to 'lbs'", (done) => {
    let initNum = "4";
    let initUnit = "kg";
    assert.equal(convertHandler.convert(initNum, initUnit), 8.8185);
    done();
  });

  test("Convert 'mi' to 'km'", (done) => {
    let initNum = "4";
    let initUnit = "mi";
    assert.equal(convertHandler.convert(initNum, initUnit), 6.43736);
    done();
  });

  test("Convert 'km' to 'mi'", (done) => {
    let initNum = "4";
    let initUnit = "km";
    assert.equal(convertHandler.convert(initNum, initUnit), 2.48549);
    done();
  });

  // test("Convert 'km' to 'mi'", (done) => {
  //   let initNum = "4";
  //   let initUnit = "km";
  //   assert.equal(convertHandler.convert(initNum, initUnit), 2.48549);
  //   done();
  // });

  // test("Convert 'km' to 'mi'", (done) => {
  //   let initNum = "4";
  //   let initUnit = "km";
  //   assert.equal(convertHandler.convert(initNum, initUnit), 2.48549);
  //   done();
  // });
});
