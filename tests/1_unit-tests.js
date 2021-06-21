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
    let input3 = "4.76M";
    assert.equal(convertHandler.getUnit(input1), 4);
    assert.equal(convertHandler.getNu(input2), 456);
    assert.equal(convertHandler.getNum(input3), 4.76);
    done();
  });
});
