var expect = require("chai").expect;
var supertest = require("supertest");
var app = require("../app").app;

var requester = supertest(app);
describe("b64mS", function(){
  describe("/encode route", function(){
    describe("POST", function(){
      it("success -- valid input string", function(done){
        requester
          .post("/encode")
          .send({
            input: "inputString"
          })
          .end(function(err, res){
            expect(res.status).to.equal(200);
            done();
          });
      });
      it("failure -- invalid input string", function(done){
        requester
          .post("/encode")
          .send({
            inputt: "inputString"
          })
          .end(function(err, res){
            expect(res.status).to.equal(400);
            done();
          });
      });
    });
  });

  describe("/decode route", function(){
    describe("POST", function(){
      it("success -- valid input string", function(done){
        requester
          .post("/decode")
          .send({
            input: "inputString"
          })
          .end(function(err, res){
            expect(res.status).to.equal(200);
            done();
          });
      });
      it("failure -- invalid input string", function(done){
        requester
          .post("/decode")
          .send({
            inputt: "inputString"
          })
          .end(function(err, res){
            expect(res.status).to.equal(400);
            done();
          });
      });
    });
  });

  describe("/docs route", function(){
    describe("GET", function(){
      it("success -- html docs served", function(done){
        requester
          .get("/docs")
          .end(function(err, res){
            expect(res.status).to.equal(200);
            done();
          });
      });
    });
  });
});
