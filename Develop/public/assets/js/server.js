const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function (req, res) {
    res.send('hello world');
})



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
