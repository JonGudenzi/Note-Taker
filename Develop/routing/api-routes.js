var noteData = require("../db/db");
var fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    app.get("/api/", function(req, res){
        res.json(index);
    });

    app.get("/api/notes", function(req, res){
        res.json(noteData);
    });

app.post("/api/notes", function (req, res){
    // console.log(req.body);
    var newNote = req.body;
    // console.log(newNote);
    newNote.id = uuidv4();
    // console.log(newNote);
    noteData.push(newNote);
    res.json(newNote);
});


app.delete(`/api/notes/:id`, function (req, res){
for(var i = 0; i < noteData.length; i++) {
    if(noteData[i].id == req.params.id) {
        noteData.splice(i, 1);
        break;
    }
}
    updateDb();
    res.json(noteData);
});

}

function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(noteData,'\t'),err => {
        if (err) throw err;
        return true;
  })};