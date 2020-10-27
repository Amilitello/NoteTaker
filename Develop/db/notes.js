const util = require("util")
const fs = require("fs")
const uuidv1 = require("uuid/v1")
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Notes {
    readNotes(){
        return readFileAsync("db/db.json","utf8")
    }

    writeNotes(data){
        return writeFileAsync("db/db.json", JSON.stringify(data))
    }

    addNotes(note){
        const newNote = {title,text,id:uuidv1()}
        return this.readNotes().then(data => [...data,newNote]).then(data => this.writeNotes(data)).then(() => newNote)

    }

    deleteNotes(id){
        return this.readNotes().then(data => data.filter(note => note.id !== id)).then(data => this.writeNotes(data))
    }


}

module.exports = new Notes()