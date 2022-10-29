const { Car, User, Consult, Review } = require("../db");
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

const getEmails = async (req, res) => {
  try {
    const users = await User.findAll({
      //include: Car,
      //where: {userId:{[Op.not]:null}},
      attributes:['mail'],
      //where: { mail: { [Op.iLike]: '%'+mail+'%'} },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};



const createUser = async (req, res) => {
  //    try {
  const { password, firstName, lastName, mail, whatsApp, address, imgPerfil } = req.body;

  const usernew = await User.create({
    password,
    firstName,
    lastName,
    mail,
    whatsApp,
    address,
    imgPerfil
  });
  res.json(usernew);
  //      res.send("user created");
  //    } catch (error) {
  //   res.send(error.message);
  // }
};

const getUserById = async (req, res) => {
  const found = await User.findByPk(req.params.id, { include: [Car, Consult,Review] });
  
  if (!found) {
    return res.status(404).send("Error: user not found");
  }

  return res.json(found);
};


const getInfoUserByEmail = async (req,res)=>{
  const{email} = req.body;

  try {
    const algo = await User.findOne({where:{mail:email}})
    res.json(algo)
  } catch (error) {
    res.status(400).json(error)
  }
}
const getInfoUserByEmail2 = async (req,res)=>{
  const{email} = req.params;

  try {
    const algo = await User.findOne({where:{mail:email}})
    const otro = await User.findByPk(algo.id, { include: Car });
    res.json(otro)
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateUser = async (req, res) => {
  const {id}= req.params;
  const found = await User.findByPk(id)
  try{
    for (const property in req.body) {
              if (property !== undefined) {
                  found[property] = req.body[property];
              };
            };
    await found.save();
    res.send("Actualizado");
  }
  catch (error) {
    return error;
      };
  };

  const createReview = async (req,res)=>{
    const{rating,userId,description}=req.body
    try {
      await Review.create({rating,userId,description})
      res.send('ratingOK')
    } catch (error) {
      res.send(error)
    }
  }
  
  const getRating = async (req,res)=>{
    const{userId} = req.body;
    try {
      const usuario = await Review.findAll({where:{userId}})
      const prueba = usuario.map(r=> r.rating)
      const sumArr = prueba.reduce((previousValue, currentValue) => previousValue + currentValue)
      const promedio = Math.ceil(sumArr/prueba.length)
      res.json(promedio)
    } catch (error) {
      res.status(400).json(error)
    }
  }


module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateCar,
  premiumUser,
  getEmails,
  getInfoUserByEmail,
  getInfoUserByEmail2,
  updateUser,
  getRating,
  createReview

};
