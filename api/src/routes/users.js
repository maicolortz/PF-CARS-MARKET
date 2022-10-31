const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  premiumUser,
  getEmails,
  getInfoUserByEmail,
  getInfoUserByEmail2,
  updateUser,
  getRating,
  createReview

 
} = require("../controllers/users");

const router = Router();

router.get("/", getAllUsers);
router.post('/infoUser',getInfoUserByEmail)
router.get('/infoUser2/:email',getInfoUserByEmail2)
router.get("/emails", getEmails);
router.get('/rating/:id', getRating)
router.post("/", createUser);
router.post('/rating',createReview)
router.get("/:id", getUserById);
router.put("/premium/:email",premiumUser);
router.put("/:id", updateUser);

module.exports = router;
