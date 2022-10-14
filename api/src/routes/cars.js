const { Router } = require("express");
const {
  getCars,
  addCars,
  getAllCars,
  getAutoById,
  createCar,
  getCarForName,
  getCarForBrand,
  getCarForCondition,
  sortprice,
  getRangeModel,
} = require("../controllers/cars");

const router = Router();

router.get("/", getAllCars);
router.post("/", createCar);
router.get("/brand/", getCarForBrand);
router.get("/search/", getCarForName);
router.get("/condition/", getCarForCondition);
router.get("/sortprice",sortprice)
router.get("/range",getRangeModel)

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (id !== null) {
      let searchId = await getAutoById(id);
      console.log(searchId);
      res.status(200).send(searchId);
    } else {
      res.send("no esta tomando el id");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});
//router.post("/", addCars)

module.exports = router;
