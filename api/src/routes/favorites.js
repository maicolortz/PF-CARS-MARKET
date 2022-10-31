const { Router } = require("express");
const {
  getAllFavorites,
  createFavourite,
} = require("../controllers/favorites");

const router = Router();

router.get("/", getAllFavorites);
router.post("/", createFavourite);

module.exports = router;
