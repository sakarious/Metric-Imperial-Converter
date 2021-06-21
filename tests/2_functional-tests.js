const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  test("Convert 45L (valid input)", function (done) {
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
});
