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
    assert.equal(convertHandler.getUnit(input1), "L");
    assert.equal(convertHandler.getUnit(input2), "kg");
    assert.equal(convertHandler.getUnit(input3), "mi");
    done();
  });

  test("Get Return Unit", (done) => {
    let input1 = "L";
    let input2 = "KG";
    let input3 = "MI";
    assert.equal(convertHandler.getReturnUnit(input1), "gal");
    assert.equal(convertHandler.getReturnUnit(input2), "lbs");
    assert.equal(convertHandler.getReturnUnit(input3), "km");
    done();
  });
});
