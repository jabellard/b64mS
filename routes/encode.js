var b64 = require("../modules/b64");

exports.encode = function(req, res){
  if (!req.body || !req.body.input) {
    res.status(400);
    res.set({
      "Content-Type": "text/plain"
    });
    res.send("Missing input string.");
  }
  else {
    if (!b64.validateString(req.body.input)) {
      res.status(400);
      res.set({
        "Content-Type": "text/plain"
      });
      res.send("Invalid input string.");
    }
    else {
      var output = b64.encodeString(req.body.input);
      res.status(200);
      res.set({
        "Content-Type": "application/json"
      });
      res.json({
        command: "ENCODE",
        input: req.body.input,
        output: output
      });
    }
  }
}
