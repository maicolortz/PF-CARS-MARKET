const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  premiumUser,
  getEmails,
  getInfoUserByEmail,
  getInfoUserByEmail2,
  updateUser

 
} = require("../controllers/users");

const router = Router();

router.get("/", getAllUsers);
router.post('/infoUser',getInfoUserByEmail)
router.get('/infoUser2/:email',getInfoUserByEmail2)
router.get("/emails", getEmails);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/premium/:email",premiumUser);
router.put("/:id", updateUser);

module.exports = router;
