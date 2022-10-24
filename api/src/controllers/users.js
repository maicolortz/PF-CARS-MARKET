const { Car, User } = require("../db");
const axios = require("axios");
//const user = require("./userJson");
const { Sequelize } = require("sequelize");
const { car, user } = require("./bdjson");
const { Op } = require("sequelize");

// async function updateUser() {
//     try {
//       console.log(user);
//       await User.bulkCreate(user);
//       console.log("User loaded correctly");
//     } catch (error) {
//       console.log(error);
//     }
//   };
async function updateCar() {
  try {
    await User.bulkCreate(user);
    console.log("User loaded correctly");
    await Car.bulkCreate(car);
    console.log("Car loaded correctly");
  } catch (error) {
    console.log(error);
  }
}
const premiumUser = async (req, res) => {
  try {
    const found = await User.findOne({ where: { mail: req.params.email } });
    const otro = await User.findByPk(found.id, { include: Car });
    console.log(otro);
    otro.cars.map((e) => e.update({ premium: true }));
    await found.save();
    res.json(otro.cars);
  } catch (error) {
    console.error(error);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Car,
      //where: {userId:{[Op.not]:null}},
      //       where: { name: { [Op.iLike]: '%'+name+'%'} },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

const createUser = async (req, res) => {
  //    try {
  const { password, firstName, lastName, mail, whatsApp, address } = req.body;

  const usernew = await User.create({
    password,
    firstName,
    lastName,
    mail,
    whatsApp,
    address,
  });
  res.json(usernew);
  //      res.send("user created");
  //    } catch (error) {
  //   res.send(error.message);
  // }
};

const getUserById = async (req, res) => {
  const found = await User.findByPk(req.params.id, { include: Car });
  console.log(found);
  if (!found) {
    return res.status(404).send("Error: user not found");
  }

  return res.json(found);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateCar,
  premiumUser,
};
