var express = require("express");

var app = express();
r
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
