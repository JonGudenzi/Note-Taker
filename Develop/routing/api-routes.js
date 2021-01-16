var noteData = require("../db/db");

module.exports = function(app) {
    // app.get("/api/", function(req, res){
    //     res.json(index);
    // });

    app.get("/api/notes", function(req, res){
        res.json(noteData);
    });

app.post("/api/notes",function (req, res){
    console.log(req.body);
    res.sendStatus(201);
})

}

