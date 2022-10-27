const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  premiumUser,
  getEmails,
  getInfoUserByEmail
 
} = require("../controllers/users");

const router = Router();

router.get("/", getAllUsers);
router.get('/infoUser',getInfoUserByEmail)
router.get("/emails", getEmails);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/premium/:email",premiumUser)

//router.post("/", addCars)

module.exports = router;
