const router = require("express").Router()
const Notes = require("../db/notes")

router.get("/api/notes", function(req, res){
    Notes.readNotes().then(data =>  res.json(data)).catch(err =>  res.json(err))
})

router.post("/api/notes", function(req, res){
    Notes.addNotes(req.body).then(data =>  res.json(data)).catch(err =>  res.json(err))
})

router.delete("/api/notes/:id", function(req, res){
    Notes.deleteNotes(req.params.id).then(() =>  res.json({ok:true})).catch(err =>  res.json(err))
})

module.exports = router