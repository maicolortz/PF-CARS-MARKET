const { Router } = require("express");
const {
  // getCars,
  // addCars,
  getAllCars,
  getAutoById,
  createCar,
  getCarForName,
  getCarForBrand,
  getCarForCondition,
  sortprice,
  getRangeModel,
  updateCar,
  phisicaldeletionCar,
  updateActive,
//  logicaldeletionCar,
} = require("../controllers/cars");
//importa mercadopago
const mercadopago = require("mercadopago");
const router = Router();

router.get("/", getAllCars);
router.post("/", createCar);
router.get("/brand/", getCarForBrand);
router.get("/search/", getCarForName);
router.get("/condition/", getCarForCondition);
router.get("/sortprice",sortprice)
router.get("/range",getRangeModel)
router.get("/:id",getAutoById)
router.delete("/:id", phisicaldeletionCar);
router.put("/:id", updateCar);
router.put("/:id/active/",updateActive)

module.exports = router;
