const { Router } = require("express");
const {
  getAllConsults,
  createConsult,
} = require("../controllers/consults");

const router = Router();

router.get("/", getAllConsults);

router.post("/", createConsult);

module.exports = router;
