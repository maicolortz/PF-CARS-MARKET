const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
 
} = require("../controllers/users");

const router = Router();

router.get("/", getAllUsers);

router.post("/", createUser);
router.get("/:id", getUserById);

//router.post("/", addCars)

module.exports = router;
