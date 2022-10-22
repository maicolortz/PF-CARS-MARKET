const { Router } = require("express");
const {
  getAllTransactionMercadoPago,
  createTransactionMercadoPago,
 
} = require("../controllers/transactionsMercadoPago");
const router = Router();
router.get("/", getAllTransactionMercadoPago);
router.post("/", createTransactionMercadoPago);
//router.post("/", addCars)

module.exports = router;
