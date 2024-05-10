const router=require("express").Router()
router.use("/notes",require("./apiroutes"))
module.exports=router