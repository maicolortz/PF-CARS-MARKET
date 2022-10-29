const { Car, User, Transaction,Consult } = require("../db");
const axios = require("axios");
//const user = require("./userJson");
const { Sequelize } = require("sequelize");
const {Op} = require('sequelize')

// async function updateUser() {
//     try { 
//       console.log(user);
//       await User.bulkCreate(user);
//       console.log("User loaded correctly");
//     } catch (error) {
//       console.log(error);
//     }
//   };

  const getAllConsults = async (req, res) => {
    let consults
    try {
      // Por query el ?userId=...
      if (req.query.userId){
        let {userId}=req.query
        consults = await Consult.findAll(
          {
            include: [User,Car],
            where: {userId:{[Op.eq]:userId}}
        }
        );
      } else {
       // lista toda la tabla sin distinción        
        consults = await Consult.findAll(
          {
            include: [User,Car]
 
            //where: {userId:{[Op.not]:null}},
   //       where: { name: { [Op.iLike]: '%'+name+'%'} },
        }
        );
      } 
      res.status(200).json(consults);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  };


  const createConsult = async (req, res) => {
//    try {
      const {
        carId,
        userId,
        description,
        date

      } = req.body;
  
      const consultNew = await Consult.create({
        userId,
        description,
        date
      });


  consultNew.setCars(await Car.findByPk(carId))

  consultNew.setUsers(await User.findByPk(userId))

  res.json(consultNew);
  }

  module.exports = {
    getAllConsults,
    createConsult,
  };