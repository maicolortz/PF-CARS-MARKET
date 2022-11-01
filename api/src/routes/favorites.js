const { Router } = require("express");
const {
  getAllFavorites,
  createFavourite,
  deleteFavourite
} = require("../controllers/favorites");

const router = Router();

router.get("/", getAllFavorites);
router.post("/", createFavourite);
router.delete("/", deleteFavourite);

module.exports = router;
