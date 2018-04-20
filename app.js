var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var encodeRoute = require("./routes/encode.js");
var decodeRoute = require("./routes/decode.js");

var app = exports.app = express();

app.set("port", process.env.PORT || 3000);

var encodeRouter = express.Router();
encodeRouter.route("/")
  .post(encodeRoute.encode);

var decodeRouter = express.Router();
decodeRouter.route("/")
  .post(decodeRoute.decode);

app.use(bodyParser.json());
app.use("/encode", encodeRouter);
app.use("/decode", decodeRouter);

http.createServer(app).listen(app.get("port"), function(){
  console.log("listening on port " + app.get("port") + " ...");
});
