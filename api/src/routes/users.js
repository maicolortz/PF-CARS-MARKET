const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
 
} = require("../controllers/users");

const router = Router();

router.get("/getusers", getAllUsers);

router.post("/createuser", createUser);
router.get("/:id", getUserById);

//router.post("/", addCars)

module.exports = router;
