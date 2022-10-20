const { Router } = require("express");
const {
  getAllTransaction,
  createTransaction,
  getTransactionById,
 
} = require("../controllers/transactions");

const router = Router();

router.get("/", getAllTransaction);

router.post("/", createTransaction);
router.get("/:id", getTransactionById);

//router.post("/", addCars)

module.exports = router;
