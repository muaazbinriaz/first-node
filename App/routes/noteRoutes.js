let express = require("express");
const {
  noteInsert,
  getNotes,
  deleteNote,
  updateNote,
} = require("../controllers/notesController");

let noteRouter = express.Router();

function hello(){
    console.log("hello");
}

noteRouter.post("/",  hello);
noteRouter.post("/insert", noteInsert);
noteRouter.get("/getNotes", getNotes);
noteRouter.delete("/deleteNote/:id", deleteNote);
noteRouter.put("/updateNote/:id", updateNote);

module.exports = noteRouter;
