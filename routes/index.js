const express = require("express")
const { homerout } = require(`../controller/index`)
const router = express.Router()
router.get(`/`, homerout)
module.exports = router