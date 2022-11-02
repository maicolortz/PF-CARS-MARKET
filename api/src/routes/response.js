const {Router} = require("express")
const{createResponse, getResponse} = require("../controllers/consults")

const router = Router()

router.get("/",getResponse)
router.post("/",createResponse)

module.exports = router