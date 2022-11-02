const { Car, User, Transaction,Consult,Response} = require("../db");
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
            include: [User,Car,Response]
 
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


  const createResponse = async (req,res)=>{
    const {userId, consultId, description} = req.body
    try {
      const respuesta = await Response.create({
        userId,
        consultId,
        description
      })
      res.send(respuesta)
    } catch (error) {
      res.status(404).json(error)
    }
  }


  const getResponse = async (req,res)=>{
   const funciona = await Response.findAll()
   res.send(funciona)
  }

  module.exports = {
    getAllConsults,
    createConsult,
    createResponse,
    getResponse
  };