const { Car, User, Transaction,Favority } = require("../db");
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

  const getAllFavorities = async (req, res) => {
    let favorities
    try {
      if (req.query.userId){
        let {userId}=req.query
        favorities = await Favority.findAll(
          {
            include: [User,Car],
            where: {userId:{[Op.eq]:userId}}
   //       where: { name: { [Op.iLike]: '%'+name+'%'} },
        }
        );
      } else {
        
        favorities = await Favority.findAll(
          {
            // include: [User,Car]
            include: [User,Car]
  
            //where: {userId:{[Op.not]:null}},
   //       where: { name: { [Op.iLike]: '%'+name+'%'} },
        }
        );
      } 
      res.status(200).json(favorities);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  };


  const createFavority = async (req, res) => {
//    try {
      const {
        cars,
        userId
      } = req.body;
  
      const favorityNew = await Favority.create({
        userId
      });
//  console.log(cars)
  cars.map(
    async (c) => await favorityNew.setCars(await Car.findByPk(c))
  )
  favorityNew.setUser(await User.findByPk(userId))

  res.json(favorityNew);
//      res.send("user created");
//    } catch (error) {
    //   res.send(error.message);
    // }
  }

//   const getFavorityByUser = async (req, res) => {
//     try {
//       const {userId}=req.body;
//       const favorities = await Favority.findAll(
//         {
//           include: [User,Car],
//           where: {userId:{[Op.eq]:userId}}
//  //       where: { name: { [Op.iLike]: '%'+name+'%'} },
//       }
//       );
      
//       res.status(200).json(favorities);
      
//     } catch (error) {
//       res.status(error.status).send(error.message);
//     }
//   };







//   const getFavorityById= async (req, res)=>{

//     const found = await Favority.findByPk(req.params.id, 
//         {include: [User,Car]})
    
//     if (!found) {
//             return res.status(404).send('Error: user not found')
//     }
    
//     return res.json(found)

// }
 


  module.exports = {
    getAllFavorities,
    createFavority,
    //getFavorityById,
    //getFavorityByUser

  };