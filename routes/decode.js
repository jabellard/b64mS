var b64 = require("../modules/b64");

exports.decode = function(req, res){
  if (!req.body || !req.body.input) {
    res.status(400);
    res.json({
      message: "Missing input string."
    });
  }
  else {
    if (!b64.validateString(req.body.input)) {
      res.status(400);
      res.json({
        message: "Invalid input string."
      });
    }
    else {
      var output = b64.decodeString(req.body.input);
      res.status(200);
      res.json({
        command: "DECODE",
        input: req.body.input,
        output: output
      });
    }
  }
}
