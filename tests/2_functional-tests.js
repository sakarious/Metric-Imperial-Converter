const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  test("Convert 45L - Valid input", function (done) {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "45L" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.initNum, 45);
        assert.equal(res.body.initUnit, "L");
        assert.approximately(res.body.returnNum, 11.88775, 0.1);
        assert.equal(res.body.returnUnit, "gal");
        done();
      });
  });

  test("Convert 45hbs - Invalid Unit", function (done) {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "45hbs" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        console.log(res.body, "invalid unit");
        done();
      });
  });

  test("Convert 4/5/6/7l - Invalid number", function (done) {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "4/5/6/7l" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        console.log(res.body, "invalid number");
        done();
      });
  });

  test("Convert 4/5/6/7hbs - Invalid number and unit", function (done) {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "4/5/6/7hbs" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        console.log(res.body, "invalid number and unit");
        done();
      });
  });
});
