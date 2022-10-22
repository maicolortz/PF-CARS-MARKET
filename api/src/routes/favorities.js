const { Router } = require("express");
const {
  getAllFavorities,
  createFavority,
  getFavorityById,
 
} = require("../controllers/favorities");

const router = Router();

router.get("/", getAllFavorities);

router.post("/", createFavority);
//router.get("/:id", getFavorityById);

//router.post("/", addCars)

module.exports = router;
