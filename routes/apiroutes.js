const router = require("express").Router()
const { readFromFile, readAndAppend } = require("../helpers/fsUtils")
const uuid = require("../helpers/uuid")
router.get("/", (req, res) => {
    readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)))
})
router.post("/", (req, res) => {
    const { title, text } = req.body
    if (title && text) {
        let note = {
            title, text, id: uuid()
        }
        readAndAppend(note, "./db/db.json")
        res.json(note)
    } else { res.json("error posting note") }
})
module.exports=router